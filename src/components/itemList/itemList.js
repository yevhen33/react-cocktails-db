import React, {Component} from 'react';
import './itemList.scss';
import CocktailServices from '../../services/cocktailServices';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


export default class ItemList extends Component {

    cocktailServices = new CocktailServices();

    state = {
        cocktList: null,
        error: false
    }

    componentDidMount() {
        this.cocktailServices.getByIngredient('Gin')
            .then( (cocktList) => {
                this.setState({
                    cocktList,
                    error: false
                })
            })
            .catch(() => this.onError());
    }

    componentDidCatch() {
        this.setState({
            cocktList: null,
            error: true
        })
    }

    onError() {
        this.setState({
            cocktList: null,
            error: true
        })
    }

    renderItem(arr) {
        return arr.map((item) => {
            const {idDrink, strDrink} = item;
            return (
                <li 
                key={idDrink}
                className="list-group-item"
                onClick={() => this.props.onCocktSelected(idDrink)}
                >
                    {strDrink}
                </li>
            )
        })
    }

    render() {
        const {cocktList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

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