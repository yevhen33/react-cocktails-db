import React, {Component} from 'react';
import Ingredients from '../ingredients';
import Instruction from '../instruction';
import './cocktailDetails.scss';
import CocktailServices from '../../services/cocktailServices';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Field = ({cockt, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{cockt[field]}</span>
        </li>
    )
}

export {
    Field
}

const FieldBtn = ({cockt}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <Ingredients
                ingList={cockt}/> 
            <Instruction
                instruct={cockt}/>
        </li>
    )
}

export {
    FieldBtn
}
export default class CocktailDetails extends Component {

    cocktailServices = new CocktailServices();
    state = {
        cockt: null,
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

    onCocktDetailLoaded = (cockt) => {
        this.setState({
            cockt,
            loading: false
        })
    }

    onError() {
        this.setState({
            cockt: null,
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

        this.cocktailServices.getFullCocktailDetails(itemId)
            .then(this.onCocktDetailLoaded)
            .catch(() => this.onError());
    }

    render() {
        const {cockt, loading, error} = this.state;

        if(!cockt && error) {
            return <ErrorMessage/>
        }else if(!cockt) {
            return <span className='cocktail-details__select-error'>Please select a cocktail</span> 
        }

        const {strDrink, strDrinkThumb, strAlcoholic, strCategory,strGlass} = cockt;

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
                    <h4>{strDrink}</h4>
                    <div className="cocktail-details__img">
                        <img src={strDrinkThumb} alt={strDrink} className="rounded-sm"></img>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {cockt})
                        })
                    }
                    {/* <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Alcoholic</span>
                        <span>{strAlcoholic}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Category</span>
                        <span>{strCategory}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Glass</span>
                        <span>{strGlass}</span>
                    </li> */}
                    {/* <li className="list-group-item d-flex justify-content-between">
                        <Ingredients
                            ingList={cockt}/> 
                        <Instruction
                            instruct={cockt}/>
                    </li> */}
                </ul>
            </div>
        );
    }
}