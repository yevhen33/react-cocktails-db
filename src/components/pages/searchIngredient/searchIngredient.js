import React, {Component} from 'react';
import SearchList from '../../searchList';
import ErrorMessage from '../../errorMessage';
import CocktailServices from '../../../services/cocktailServices';
import RowBlock from '../../rowBlock';
import IngradientPage from './ingredientPage';

export default class SearchIngradient extends Component {
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
            <SearchList 
                onItemSelected={this.onItemSelected}
                getData={this.cocktailServices.getSearchIngredient()}
                renderItem={(item) => item.search}
            />
        )

        const cocktailDetails = (
            <div className='select-element'>Select an element of the list for further work  with the application and familiarization with cocktails</div>
        )

        if (selectedItem == null) {
            return (
                <RowBlock 
                    left={itemList}
                    right={cocktailDetails}/>
            )
        }

        return (
            <IngradientPage
                searchId = {selectedItem}/>
        )
  
    }
}