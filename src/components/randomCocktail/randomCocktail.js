import React, {Component} from 'react';
import CocktailServices from '../../services/cocktailServices';
import './randomCocktail.scss';

export default class RandomCocktail extends Component {

    constructor() {
        super();
        this.updateCocktail();
    }

    cocktailServices = new CocktailServices();
    state = {
        cocktail: {}
    }

    onCocktailLoaded = (cocktail) => {
        this.setState({cocktail})
    }

    updateCocktail() {
        this.cocktailServices.getRandomCocktail()
            .then(this.onCocktailLoaded);
    }

    render() {
        const { cocktail: { strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass } } = this.state;

        return (
            <div className="random-block rounded">
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
            </div>
        );
    }
}
