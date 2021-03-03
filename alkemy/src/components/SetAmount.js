import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Start from './Start';
import Home from './Home';
import Control from './Control';

const SetAmount = () => {
    const [ budget, setBudget] = useState(0);
    const [ amountleft, setAmountLeft ] = useState(0);
    
  
    return (
      <>
      <Container maxWidth="sm">
        <h1>Adm de Presupuesto</h1>
        <Start
          setBudget={setBudget}
          setAmountLeft={setAmountLeft}
        />
        <Home
          budget={budget}
          amountleft={amountleft}
        />
        <Control
          budget={budget}
          amountleft={amountleft}
        />
      </Container>
      </>
    );
}
 
export default SetAmount;