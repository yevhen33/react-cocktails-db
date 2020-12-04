import React, {Component} from 'react';
import './itemList.scss';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }
   
    componentDidMount() {
        const {getData} = this.props;

        getData
            .then( (itemList) => {
                this.setState({
                    itemList,
                    error: false
                })
            })
            .catch(() => this.onError());
    }

    componentDidCatch() {
        this.setState({
            itemList: null,
            error: true
        })
    }

    onError() {
        this.setState({
            itemList: null,
            error: true
        })
    }

    renderItem(arr) {
        return arr.map((item) => {
            const {idDrink} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                key={idDrink}
                className="list-group-item"
                onClick={() => this.props.onItemSelected(idDrink)}
                >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItem(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}