import React, {useState} from 'react';
import RowBlock from '../../rowBlock';
import AlcoholDetails from './alcoholDetails';


const alcohol = [ 'Ale', 'Beer', 'Lager', 'Cider', 'Sake', 'Wine', 'Port', 'Sherry', 'Vermouth', 'Champagne', 'Arrack', 'Cachaça', 'Rum', 'Applejack', 'Brandy', 'Cognac', 'Pisco', 'Gin', 'Whisky', 'Bourbon', 'Vodka', 'Absinthe', 'Schnapps', 'Tequila', 'Sweet Vermouth', 'Strawberry schnapps', 'Scotch', 'Triple sec', 'Southern Comfort', 'Dry Vermouth', 'Amaretto', 'Kahlua', 'Baileys', 'Añejo rum', 'Sugar', 'Watermelon', 'Apple brandy', 'Grenadine', 'Red wine', 'Ricard', 'Sloe gin', 'Galliano', 'Ouzo', 'Coffee', 'Apple cider', 'Absolut Citron', 'Midori melon liqueur', 'Sambuca', 'Peppermint schnapps', 'Creme de Cassis' ];

const AlcoholPage = () => {

    const [item, selectedItem] = useState(null);

    function renderItem(arr) {

        return arr.map((item, i) => {
          return (  
            <li 
                key={i}
                className="list-group-item"
                onClick={() => selectedItem(item)}
                >
                    {item}
            </li>
          )
        })
    }

    const alcoholList = renderItem(alcohol);

    function renderList(list) {
        return (
            <ul className="item-list list-group">
                    {list}
            </ul>
        )
    }

    const listAlc = renderList(alcoholList);

    const alcoholDetails = (
        <AlcoholDetails itemId={item}/>
    )
    return (
        <RowBlock 
            left={listAlc}
            right={alcoholDetails}
            />
    )
}
export default AlcoholPage;
