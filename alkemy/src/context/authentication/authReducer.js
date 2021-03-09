import {
    REG_SUCCESS,
    REG_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SING_OFF
} from '../../types';

export default (state, action) => {
    switch (action.type) {        
        case REG_SUCCESS:
        case LOGIN_SUCCESS:    
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                msg: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }
        case SING_OFF:
        case LOGIN_ERROR:
        case REG_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                msg: action.payload,
                loading: false
            }
        default:
            return state;
    }
}