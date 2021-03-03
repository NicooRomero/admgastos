import React from 'react';
import Spending from './Spending';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const List = ({expenses}) => (
    <>
        <Card>
            <CardContent>
                <h3>Listado de Gastos</h3>
                {expenses.map(spending => (
                    <Spending
                        key={spending.id}
                        spending={spending}
                    />
                ))}
            </CardContent>
        </Card>
    </>
);
 
export default List;