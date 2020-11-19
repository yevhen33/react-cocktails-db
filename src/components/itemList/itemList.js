import React, {Component} from 'react';
import './itemList.scss';

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Margaritta
                </li>
                <li className="list-group-item">
                    Cosmopolitan
                </li>
                <li className="list-group-item">
                    B-52
                </li>
            </ul>
        );
    }
}