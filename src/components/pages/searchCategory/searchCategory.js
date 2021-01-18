import React, {Component} from 'react';
import SearchList from '../../searchList';
import ErrorMessage from '../../errorMessage';
import CocktailServices from '../../../services/cocktailServices';
import RowBlock from '../../rowBlock';
import {withRouter} from 'react-router-dom';

class SearchCategory extends Component {
  cocktailServices = new CocktailServices();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        const {error} = this.state;
        if(error) {
            return <ErrorMessage/>
        }

        const searchList = (
            <SearchList 
                onItemSelected={(searchId) => {
                    this.props.history.push(searchId)
                }}
                getData={this.cocktailServices.getSearchCategory()}
                renderItem={(item) => item.search}
            />
        )

        const descr = (
            <div className='select-element'>Select an element of the list for further work  with the application and familiarization with cocktails</div>
        )

        return (
            <RowBlock 
                left={searchList}
                right={descr}/>
        )
    }
}

export default withRouter(SearchCategory);