import React, {Component} from 'react';
import ItemList from '../itemList';
import CocktailDetails from '../cocktailDetails';
import ErrorMessage from '../errorMessage';
import CocktailServices from '../../services/cocktailServices';
import RowBlock from '../rowBlock';

export default class IngredientPage extends Component {
  cocktailServices = new CocktailServices();

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

        const itemList = (
            <ItemList 
                onCocktSelected={this.onCocktSelected}
                getData={this.cocktailServices.getByIngredient('Rum')}
                renderItem={(item) => item.strDrink}
            />
        )

        const cocktailDetails = (
            <CocktailDetails 
                cocktId={selectedCockt}/>
        )
 
        return (
            <RowBlock 
                left={itemList}
                right={cocktailDetails}/>
        )
    }
}