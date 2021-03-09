import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import {
    REG_SUCCESS,
    REG_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SING_OFF
} from '../../types';

const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null,
        loading: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const regUser = async data => {
        try {
            const response = await clienteAxios.post('/api/users', data);
            console.log(response)

            dispatch({
                type: REG_SUCCESS,
                payload: response.data
            });

            userAuth();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'error'
            }
            dispatch({
                type: REG_ERROR,
                payload: alert
            })
        }
    }

    const userAuth = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }
        try {
            const response = await clienteAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const userLogIn = async data => {
        try {
            const response = await clienteAxios.post('/api/auth', data);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })

            userAuth();
        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    const userSingOff = () => {
        dispatch({
            type: SING_OFF
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                loading: state.loading,
                regUser,
                userLogIn,
                userAuth,
                userSingOff,
            }}
        >{props.children}</AuthContext.Provider>
    );
}
export default AuthState;