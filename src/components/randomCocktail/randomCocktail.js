import React, {Component} from 'react';
import CocktailServices from '../../services/cocktailServices';
import './randomCocktail.scss';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
export default class RandomCocktail extends Component {

    cocktailServices = new CocktailServices();
    state = {
        cocktail: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateCocktail();
        this.timerId = setInterval(this.updateCocktail, 15000);  
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCocktailLoaded = (cocktail) => {
        this.setState({
            cocktail,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCocktail = () => {
        this.cocktailServices.getRandomCocktail()
            .then(this.onCocktailLoaded)
            .catch(this.onError);
    }

    render() {
        const { cocktail, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View cocktail={cocktail}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content} 
            </div>
        );
    }
}

const View = ({cocktail}) => {

    const {strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass} = cocktail;

    return (
        <>
            <h4>Random Cocktail: {strDrink}</h4>
            <div className="random-block__img">
                <img src={strDrinkThumb} alt={strDrink} className="rounded-sm"></img>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Alcoholic </span>
                    <span>{strAlcoholic}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Category </span>
                    <span>{strCategory}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Glass </span>
                    <span>{strGlass}</span>
                </li>
            </ul>
        </>
    )
}
