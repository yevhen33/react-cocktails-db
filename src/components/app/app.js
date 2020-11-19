import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomCocktail from '../randomCocktail';
import ItemList from '../itemList';
import CocktailDetails from '../cocktailDetails';
import PopularCocktails from '../popularCocktails';


const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col md={{size: 5, offset: 0}}>
                        <RandomCocktail/>
                    </Col>
                    <Col md={{size: 5, offset: 2}}>
                        <PopularCocktails/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CocktailDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;