import React, {Component} from 'react';
import './searchList.scss';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class SearchList extends Component {

    state = {
        searchList: null,
        error: false
    }
   
    componentDidMount() {
        const {getData} = this.props;

        getData
            .then( (searchList) => {
                this.setState({
                    searchList,
                    error: false
                })
            })
            .catch(() => this.onError());
    }

    componentDidCatch() {
        this.setState({
            searchList: null,
            error: true
        })
    }

    onError() {
        this.setState({
            searchList: null,
            error: true
        })
    }

    renderItem(arr) {
        return arr.map((item, i) => {
            const {search} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                key={i}
                className="list-group-item"
                onClick={() => this.props.onItemSelected(search)}
                >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {searchList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if(!searchList) {
            return <Spinner/>
        }

        const items = this.renderItem(searchList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}