import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
        color: 'white',
        backgroundColor: '#3f51b5',
        padding: '1px',
        borderRadius: 3,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        textTransform: 'uppercase',
        marginTop: '10px',
        fontFamily: 'Roboto, sans-serif'
    }
    
});

const Spending = ({spending}) => {

    const classes = useStyles();
    
    return (   

        <li className={classes.list}>
            <p>
                {spending.name}
                
            </p>
            <p>
               $ {spending.amount}
            </p>
        </li>
    );
}
 
export default Spending;