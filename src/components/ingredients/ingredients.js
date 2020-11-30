import React, {useState} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';

const Ingredients = ({ingList}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const {ingList} = props;
  const {ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10} = ingList;
  const {measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10} = ingList;

  const data = [
    {ing: ingredient1, measure: measure1}, 
    {ing: ingredient2, measure: measure2}, 
    {ing: ingredient3, measure: measure3}, 
    {ing: ingredient4, measure: measure4}, 
    {ing: ingredient5, measure: measure5}, 
    {ing: ingredient6, measure: measure6}, 
    {ing: ingredient7, measure: measure7}, 
    {ing: ingredient8, measure: measure8}, 
    {ing: ingredient9, measure: measure9}, 
    {ing: ingredient10, measure: measure10}
  ];


  function renderItem(arr) {
    return arr.map((item, i) => {
      const {ing, measure} = item;
      if(ing !==null && measure !== null) {
        return (
          <li 
            key={i}
            className="list-group-item d-flex justify-content-between">
            <span className="term">{ing}</span>
            <span className="space">-</span>
            <span>{measure}</span>
          </li>
        )
      }
       else {
        return null;
      }
    })
  }
  
  const items = renderItem(data);

  return (
    <div>
      <Button outline color="secondary" 
        onClick={toggle} 
        style={{ marginBottom: '1rem' }}>Ingredients</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ul className="list-group list-group-flush">
                {items}
              </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Ingredients;