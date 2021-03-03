import React from 'react';
import clienteAxios from '../config/axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { checkBudget } from './helpers';

const useStyles = makeStyles({
    content: {
        marginTop: '2rem'
    },

    budget: {
        backgroundColor: '#3f51b5',
        padding: '8px',
        alignContent: 'center',
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        borderRadius: 3,
    }
    
});
// try {

//     let data;

//     const res = clienteAxios.post('/api/budget');
//     res.json(data)
//     console.log(res)
// } catch (error) {
//     console.log(error)
// }
const Control = ({budget, amountleft}) => {

    const classes = useStyles();
    const color = checkBudget(budget, amountleft);

    return (         
        <>
        <Container maxWidth="md">
            <Card className={classes.content}>
                <CardContent>
                    <Grid container spacing={3}>
                        
                        <Grid item xs={6}> 
                            <div className={classes.budget}>
                            Presupuesto: $ {budget}
                            </div>
                        </Grid>
                        <Grid item xs={6}> 
                            <div className={checkBudget(budget, amountleft)}>
                                Restante: $ {amountleft}
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card> 
        </Container>    
        </>
     );
}
 
export default Control;