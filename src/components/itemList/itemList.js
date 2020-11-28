import React, {Component} from 'react';
import './itemList.scss';
import CocktailServices from '../../services/cocktailServices';
import Spinner from '../spinner';


export default class ItemList extends Component {

    cocktailServices = new CocktailServices();

    state = {
        cocktList: null
    }

    componentDidMount() {
        this.cocktailServices.getByIngredient('Gin')
            .then( (cocktList) => {
                this.setState({
                    cocktList
                })
            })
    }

    renderItem(arr) {
        return arr.map((item) => {
            let id = item.idDrink;
            return (
                <li 
                key={id}
                className="list-group-item"
                onClick={() => this.props.onCocktSelected(id)}
                >
                    {item.strDrink}
                </li>
            )
        })
    }

    render() {
        const {cocktList} = this.state;

        if(!cocktList) {
            return <Spinner/>
        }

        const items = this.renderItem(cocktList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}