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