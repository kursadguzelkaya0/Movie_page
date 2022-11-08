import axios from 'axios';
import { returnErorrs } from './errorActions';
import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, LOGOUT_SUCCESS, REDIRECT_TO_HOME } from './types';

// Check token & load user
export const loadUser = () => (dispatch, getState)=> {
    // Load user
    dispatch({ type: USER_LOADING })

    axios.get('/api/auth/user', configToken(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErorrs(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// Register User
export const register = ({ name, email, password, password2, history }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };
    
    // Request Body
    const body = JSON.stringify({ name, email, password, password2 });

    axios.post('/api/users', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch({
                type: REDIRECT_TO_HOME,
                payload: history,
            });
        })
        .catch(err => {
            console.log(err);
            dispatch(returnErorrs(err.response.data, err.response.status, "REGISTER_FAIL"));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// Login User
export const login = ({ email, password, history }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };
    
    // Request Body
    const body = JSON.stringify({ email, password });

    axios.post('/api/auth', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch({
                type: REDIRECT_TO_HOME,
                payload: history,
            });
        })
        .catch(err => {
            dispatch(returnErorrs(err.response.data, err.response.status, "LOGIN_FAIL"));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

// Logout User
export const logout = () =>{
    return{
        type: LOGOUT_SUCCESS   
    }
}

// Get token, set config&headers
export const configToken = getState => {
    // Get token
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };
    
    // If token add headers
    if(token) {
        config.headers['x-auth-token'] = token;
    };

    return config;
}

export const redirectToHome = history => ({
    type: REDIRECT_TO_HOME,
    payload: history
});