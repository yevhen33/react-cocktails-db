import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CocktailDetails from '../cocktailDetails';
import ErrorMessage from '../errorMessage';


export default class IngredientPage extends Component {
    state = {
        selectedCockt: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCocktSelected = (id) => {
        this.setState({
            selectedCockt: id
        })
    }

    render() {
        const {selectedCockt, error} = this.state;

        if(error) {
            return <ErrorMessage/>
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList 
                    onCocktSelected={this.onCocktSelected}/>
                </Col>
                <Col md='6'>
                    <CocktailDetails 
                    cocktId={selectedCockt}/>
                </Col>
            </Row>
        )
    }
}