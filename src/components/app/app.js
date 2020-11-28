import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomCocktail from '../randomCocktail';
import PopularCocktails from '../popularCocktails';
import IngredientPage from '../ingredientPage';
import ErrorMessage from '../errorMessage';
import { Button } from 'reactstrap';


export default class App extends Component {

    state = {
        showRandomCocktail: true,
        showPopularCocktail: false,
        selectedCockt: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomCocktail = () => {
        this.setState((state) => {
            return {
                showRandomCocktail: !state.showRandomCocktail
            }
        });
    }

    togglePopularCocktail = () => {
        this.setState((state) => {
            return {
                showPopularCocktail: !state.showPopularCocktail
            }
        })
    }

    render() {
        const {showRandomCocktail, showPopularCocktail, error} = this.state;

        if(error) {
            return <ErrorMessage/>
        }

        const randomCocktail = showRandomCocktail ? <RandomCocktail/> : null;
        const popularCocktail = showPopularCocktail ? <PopularCocktails/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col md={{size: 5, offset: 0}}>
                            {randomCocktail}
                            <Button 
                                style={{ marginBottom: '1rem', 
                                backgroundColor: 'rgba(0, 255, 127, 0.6)'}}
                                onClick={this.toggleRandomCocktail}>Toggle random cocktail</Button>
                        </Col>
                        <Col md={{size: 5, offset: 2}}>
                            {popularCocktail}
                            <Button  
                                style={{ marginBottom: '1rem',
                                backgroundColor: 'rgba(0, 255, 127, 0.6)',
                                float: 'right' }}
                                onClick={this.togglePopularCocktail}>Toggle popular cocktail</Button>
                        </Col>
                    </Row>
                    <IngredientPage/>
                </Container>
            </>
        );
    }
};
