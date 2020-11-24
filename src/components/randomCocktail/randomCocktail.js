import React, {Component} from 'react';
import CocktailServices from '../../services/cocktailServices';
import './randomCocktail.scss';
import Spinner from '../spinner';
export default class RandomCocktail extends Component {

    constructor() {
        super();
        this.updateCocktail();
    }

    cocktailServices = new CocktailServices();
    state = {
        cocktail: {},
        loading: true
    }

    onCocktailLoaded = (cocktail) => {
        this.setState({
            cocktail,
            loading: false
        })
    }

    updateCocktail() {
        this.cocktailServices.getRandomCocktail()
            .then(this.onCocktailLoaded);
    }

    render() {
        const { cocktail, loading } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <View cocktail={cocktail}/> : null;
        return (
            <div className="random-block rounded">
               
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
