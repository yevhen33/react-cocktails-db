import React, {useState} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';

const Ingredients = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button outline color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Ingredients</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Tequila </span>
                    <span className="space">-</span>
                    <span>1 1/2 oz</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Triple sec</span>
                    <span className="space">-</span>
                    <span>1/2 oz</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Lime juice </span>
                    <span className="space">-</span>
                    <span>1 oz</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Salt </span>
                    <span className="space">-</span>
                    <span>decoration</span>
                </li>
              </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Ingredients;