import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Home from './components/Home';
import AuthState from './context/authentication/authState';
import AlertState from './context/alerts/alertState';
import tokenAuth from './config/token';
import PrivateRoute from './components/routes/PrivateRoute';

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

const SetAmount = () => {
    
  
    return (
      <AuthState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </Router>
        </AlertState>
      </AuthState>
    );
}
 
export default SetAmount;