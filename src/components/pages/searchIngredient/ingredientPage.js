import React, {Component} from 'react';
import ItemList from '../../itemList';
import CocktailDetails, {Field, FieldBtn} from '../../cocktailDetails';
import ErrorMessage from '../../errorMessage';
import CocktailServices from '../../../services/cocktailServices';
import RowBlock from '../../rowBlock';

export default class IngredientPage extends Component {
  cocktailServices = new CocktailServices();

    state = {
        selectedItem: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const {selectedItem, error} = this.state;
        if(error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.cocktailServices.getByIngredient(this.props.searchId)}
                renderItem={(item) => item.strDrink}
            />
        )

        const cocktailDetails = (
            <CocktailDetails itemId={selectedItem}>
                <Field field='strAlcoholic' label='Alcoholic'/>
                <Field field='strCategory' label='Category'/>
                <Field field='strGlass' label='Glass'/>
                <FieldBtn/>
            </CocktailDetails>
        )
 
        return (
            <RowBlock 
                left={itemList}
                right={cocktailDetails}/>
        )
    }
}