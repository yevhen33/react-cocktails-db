import React, {Component} from 'react';
import Ingredients from '../ingredients';
import Instruction from '../instruction';
import './cocktailDetails.scss';

export default class CocktailDetails extends Component {

    render() {
        return (
            <div className="cocktail-details rounded">
                <div className="cocktail-details__header">
                    <h4>Margarita</h4>
                    <div className="cocktail-details__img">
                        <img src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="cocktail" className="rounded-sm"></img>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Alcoholic</span>
                        <span>Alcoholic</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Category</span>
                        <span>Ordinary Drink</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Glass</span>
                        <span>Cocktail glass</span>
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