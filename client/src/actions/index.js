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
    return dispatch => {
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

export function createProposal({title, body}) {
    return dispatch => {
        axios.post(`${API}proposal`, {
            title,
            body
        }, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then(response => {
            dispatch({
                type: types.CREATE_PROPOSAL,
                payload: response.data
            })
        }).catch(response => {
            dispatch({
                types: types.CREATE_PROPOSAL_ERROR,
                payload: {
                    status: response.response.status,
                    message: response.response.data.error
                }
            })
        });
    }
}

export function createProposalDefault() {
    return {
        type: types.CREATE_PROPOSAL_DEFAULT
    }
}

export function fetchProposalId(id) {
    return dispatch => {
        axios.get(`${API}proposal/${id}`)
            .then(response => {
                dispatch({
                    type: types.FETCH_PROPOSAL,
                    payload: response.data
                })
            })
            .catch(response => {
                dispatch({
                    type: types.FETCH_PROPOSAL_ERROR,
                    payload: {
                        id,
                        status: response.status,
                        message: response.data
                    }
                })
            })
    }
}