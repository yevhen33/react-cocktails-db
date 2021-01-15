import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Instruction = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {instruct: {strInstructions} } = props;

  return (
    <div>
      <Button outline color="secondary" onClick={toggle} style={{ marginBottom: '1rem', float: 'right' }}>Instruction</Button>
      <Collapse isOpen={isOpen}>
        <Card style={{ float: 'right' }}>
          <CardBody>
            {strInstructions}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Instruction;