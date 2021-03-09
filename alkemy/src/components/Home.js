import React, { useState, useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Nav from './Nav';
import Start from './Start';
import Operations from './Operations';
import Control from './Control';
import AuthContext from '../context/authentication/authContext';

const SetAmount = () => {

    const authContext = useContext(AuthContext);
    const {userAuth} = authContext;

    useEffect(() => {
      userAuth();
    }, []);

    const [ showInitial, setShowInitial ] = useState(true);
    const [ budget, setBudget] = useState(0);
    const [ amountleft, setAmountLeft ] = useState(0);
    const [ name, setName ] = useState('');
    
  
    return (
      <>
      <Nav />
      <Container maxWidth="md">
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
            <Operations
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