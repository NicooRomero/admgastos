import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Start from './components/Start';
import Home from './components/Home';
import Control from './components/Control';

const SetAmount = () => {

    const [ showInitial, setShowInitial ] = useState(true);
    const [ budget, setBudget] = useState(0);
    const [ amountleft, setAmountLeft ] = useState(0);
    const [ name, setName ] = useState('');
    
  
    return (
      <>
      <Container maxWidth="md">
        <h1>Adm de Presupuesto</h1>
        { showInitial ? 
        (
          <Container maxWidth="sm">
            <Start
            setBudget={setBudget}
            setAmountLeft={setAmountLeft}
            setShowInitial={setShowInitial}
            setName={setName}
            />
          </Container>
        )
        : 
        (
          <Container maxWidth="md">
            <Home
              amountleft={amountleft}
              setAmountLeft={setAmountLeft}
              name={name}
            />
          </Container>          
        )        
        }
        <Container maxWidth="md">
            <Control
              budget={budget}
              amountleft={amountleft}
            />
          </Container>        
      </Container>
      
      </>
    );
}
 
export default SetAmount;