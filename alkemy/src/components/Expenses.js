import React, { useState } from 'react';
import shortid from 'shortid';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    helpertext: {
        color: 'white',
        backgroundColor: 'red',
        padding: '5px',
        borderRadius: 3,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '500'
    }
    
});

const Expenses = ({setSpending, setCreateSpending}) => {

    const classes = useStyles();

    const [ name, setName ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);
    const [helperText, setHelperText] = useState('');
    
    const addSpending = e => {
        e.preventDefault();
        
        if(amount < 1 || isNaN( amount ) || name.trim() === ''){
            setHelperText('Ambos campos son obligatorios');
            setError(true);
            return;
        } else {
            setError(false);
        }

        const spending = {
            name,
            amount
        }

        spending.id = shortid.generate();

        setSpending(spending);
        setCreateSpending(true);

        setName('');
        setAmount(0);
    }

    return ( 
        <>           
                    <Card>                
                    <CardContent>
                        <h3>Agrega tus gastos aquí</h3>
                        { error ? <FormHelperText className={classes.helpertext}>{helperText}</FormHelperText> : null }
                        <div>
                            <div>
                                <form onSubmit={addSpending} >
                                    <TextField
                                        error={error}
                                        id="standard-full-width"
                                        label="Concepto gasto"
                                        type="text"
                                        placeholder="Ej. Comida"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        value={name}
                                        onChange={ e => setName(e.target.value) }
                                    />

                                    <TextField
                                        error={error}
                                        id="standard-full-width"
                                        label="Monto del gasto"
                                        type="number"
                                        placeholder="Ingresar Cantidad"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        value={amount}
                                        onChange={ e => setAmount(parseInt(e.target.value)) }
                                    />
                                    <Button variant="contained" color="primary" disableElevation type="submit">
                                        Agregar Gasto
                                    </Button>
                                </form>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
        </>
     );
}
 
export default Expenses;