import React, {Component} from 'react';
import Ingredients from '../ingredients';
import Instruction from '../instruction';
import './cocktailDetails.scss';
import CocktailServices from '../../services/cocktailServices';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


export default class CocktailDetails extends Component {

    cocktailServices = new CocktailServices();
    state = {
        cockt: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateCockt();
    }

    componentDidUpdate(prevProps) {
        if (this.props.cocktId !== prevProps.cocktId) {
            this.updateCockt();
        }
    }

    onCocktDetailLoaded = (cockt) => {
        this.setState({
            cockt,
            loading: false
        })
    }

    onError() {
        this.setState({
            cockt: null,
            error: true
        })
    }

    updateCockt() {
        const {cocktId} = this.props;
        if(!cocktId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.cocktailServices.getFullCocktailDetails(cocktId)
            .then(this.onCocktDetailLoaded)
            .catch(() => this.onError());
    }

    render() {
        const {cockt, loading, error} = this.state;

        if(!cockt && error) {
            return <ErrorMessage/>
        }else if(!cockt) {
            return <span className='cocktail-details__select-error'>Please select a cocktail</span> 
        }

        const {strDrink, strDrinkThumb, strAlcoholic, strCategory,strGlass} = cockt;

        if(loading) {
            return (
                <div className="cocktail-details rounded">
                    <Spinner/>
                </div>
            )
        }

        return (
            <div className="cocktail-details rounded">
                <div className="cocktail-details__header">
                    <h4>{strDrink}</h4>
                    <div className="cocktail-details__img">
                        <img src={strDrinkThumb} alt={strDrink} className="rounded-sm"></img>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Alcoholic</span>
                        <span>{strAlcoholic}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Category</span>
                        <span>{strCategory}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Glass</span>
                        <span>{strGlass}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Ingredients/> 
                        <Instruction/>
                    </li>
                </ul>
            </div>
        );
    }
}