import React, { useState, useEffect } from 'react';
import clienteAxios from '../config/axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormHelperText from '@material-ui/core/FormHelperText';
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

const Start = ( {setBudget, setAmountLeft, setShowInitial, setName} ) => {

    const [ amount, setAmount ] = useState(0);
    const [ user, setUser ] = useState();
    const [ error, setError ] = useState(false);
    const [helperText, setHelperText] = useState('');

    const addAmount = async e => {
        e.preventDefault();
        
        try {

            const initial = {
                amount
            }
            console.log(user)
            
            if( amount > 1 || amount.trim() !== '' ) {  

                setError(false);
                setShowInitial(false);                
                setBudget(amount);
                setAmountLeft(amount);
                //setName(user);
                console.log(initial)
                const res = await clienteAxios.post('/api/budget', initial);   

                           
            } else {            
                setHelperText('Todos los campos son obligatorios');
                setError(true);
                return;    
            }

        } catch (error) {
            console.log(error);
        }
    }

    const classes = useStyles();

    return (
        <Card>
            <CardContent>
            <div>
                <div>
                    <form onSubmit={addAmount}>
                        { error ? <FormHelperText className={classes.helpertext}>{helperText}</FormHelperText> : null }
                        <TextField
                        error={error}
                        id="standard-full-width"
                        label="Establece un monto inicial"
                        type="number"
                        placeholder="Ingresar Cantidad"
                        helperText="Ingresa solo números"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={ e => setAmount(parseInt(e.target.value, 10)) }                
                        />

                        {/* <TextField
                        error={error}
                        id="standard-full-width"
                        label="Introduce tu nombre"
                        type="text"
                        placeholder="Ej. Juan"
                        helperText="Ingresa solo texto"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={ e => setUser(e.target.value) }                
                        /> */}
                        
                        <Button variant="contained" color="primary" disableElevation type="submit">
                            Guardar
                        </Button>
                    </form>
                </div>
            </div>
            </CardContent>
        </Card>
    );
}
 
export default Start;