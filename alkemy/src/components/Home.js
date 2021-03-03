import React, { useState,useEffect } from 'react';
import clienteAxios from '../config/axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Expenses from './Expenses';
import List from './List';


const Home = ({amountleft, setAmountLeft, name}) => {

    const [ expenses, setExpenses ] = useState([]); 
    const [ spending, setSpending ] = useState({});  
    const [ createspending, setCreateSpending ] = useState(false);  

    useEffect(() => {
        if(createspending) {
            setExpenses([
                ...expenses,
                spending
            ]); 

            const budgetRemaining = amountleft - spending.amount;
            const left = {
                amount: budgetRemaining
            }
            try {
                const res = clienteAxios.patch('/api/budget', left); 
            } catch (error) {
                console.log(error);
            }
            
            console.log(budgetRemaining)
            setAmountLeft(budgetRemaining);

            setCreateSpending(false);
        }
    }, [spending]);

    // const addNewExpenses = spending => {
    //     setExpenses([
    //         ...expenses,
    //         spending
    //     ]);  
    //   console.log(expenses)  
    // }   
      


    return ( 
        <>
        <Container maxWidth="md">
            <h2>OPERACIONES</h2>
            <h1>Hola {name}!</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>            
                    <Expenses
                        setSpending={setSpending}
                        setCreateSpending={setCreateSpending}
                    />
                </Grid>
                <Grid item xs={6}>
                    <List
                        expenses={expenses}
                    />
                </Grid>
            </Grid>
        </Container>
            
        </>
     );
}
 
export default Home;