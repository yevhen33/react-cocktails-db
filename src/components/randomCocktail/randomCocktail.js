import React, {Component} from 'react';
import './randomCocktail.scss';

export default class RandomCocktail extends Component {

    render() {

        return (
            <div className="random-block rounded">
                <h4>Random Cocktail: B-52</h4>
                <div className="random-block__img">
                    <img src="https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg" alt="cocktail" className="rounded-sm"></img>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Alcoholic </span>
                        <span>alcoholic</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Category </span>
                        <span>Ordinary Drink</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Glass </span>
                        <span>Highball glass</span>
                    </li>
                </ul>
            </div>
        );
    }
}
