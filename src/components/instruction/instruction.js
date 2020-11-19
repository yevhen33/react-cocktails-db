import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Instruction = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button outline color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Instruction</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          Rub the rim of the glass with the lime slice to make the salt stick to it. 
          Take care to moisten only the outer rim and sprinkle the salt on it.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Instruction;