import axios from 'axios';
import * as types from './types';

const API = 'http://localhost:5000/';

export function signUpUser(formProps) {
    return dispatch => {
        axios.post(`${API}signup`, {
            email: formProps.email,
            password: formProps.password
        }).then(response => dispatch({
            type: types.SIGNUP,
            payload: response
        })).catch(response => {
            dispatch({
                type: types.SIGNUP_ERROR,
                payload: response
            });
        }
        );
    }
}

export function resetSignUp() {
    return { type: types.SIGNUP_DEFAULT }
}

export function signInUser(formProps) {
    return async dispatch => {
        axios.post(`${API}signin`, {
            email: formProps.email,
            password: formProps.password
        }).then(response => {
            dispatch({
                type: types.SIGNIN,
                payload: response.data
            });
        }).catch(response => {
            dispatch({
                type: types.SIGNIN_ERROR,
                payload: {
                    status: response.response.status,
                    message: response.response.data.error
                },
            });
        });
    }
}

export function signOut() {
    return {
        type: types.SIGNOUT
    }
}