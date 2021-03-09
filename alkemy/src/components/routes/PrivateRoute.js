import React, {Component, useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    
    const authContext = useContext(AuthContext);
    const { authenticated, loading, userAuth } = authContext;

    useEffect(() => {
        userAuth();
    }, []);

    return (
        <Route {...props} render={props => !authenticated && !loading 
            ? 
            (
                <Redirect to="/" />
            ) 
            :
            (
                <Component {...props} />
            ) 
            } 
        />
    )
}

export default PrivateRoute;
