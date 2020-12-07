import React, {Component} from 'react';
import '../../cocktailDetails/cocktailDetails.scss';
import CocktailServices from '../../../services/cocktailServices';
import Spinner from '../../spinner';
import ErrorMessage from '../../errorMessage';

export default class AlcoholDetails extends Component {

    cocktailServices = new CocktailServices();
    state = {
        ingredient: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateCockt();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateCockt();
        }
    }

    onAlcDetailLoaded = (ingredient) => {
        this.setState({
            ingredient,
            loading: false
        })
    }

    onError() {
        this.setState({
            ingredient: null,
            error: true
        })
    }

    updateCockt() {
        const {itemId} = this.props;
        if(!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.cocktailServices.getAlcoholDetails(itemId)
            .then(this.onAlcDetailLoaded)
            .catch(() => this.onError());
    }

    render() {
        const {ingredient, loading, error} = this.state;

        if(!ingredient && error) {
            return <ErrorMessage/>
        }else if(!ingredient) {
            return <span className='cocktail-details__select-error'>Please select a drinck</span> 
        }

        const {drink, alcohol, type, description} = ingredient;

        if(loading) {
            return (
                <div className="cocktail-details rounded">
                    <Spinner/>
                </div>
            )
        }

        return (
            <div className="cocktail-details rounded">
                <div className="cocktail-details__header">
                    <h4>{drink}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Alcohol strength</span>
                        <span>{alcohol}vol.</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Drink type</span>
                        <span>{type}</span>
                    </li>
                    {/* <li className="list-group-item">
                        <span>{description}</span>
                    </li> */}
                    <div className="cocktail-details__descr">
                        {description}
                    </div>
                </ul>
            </div>
        );
    }
}