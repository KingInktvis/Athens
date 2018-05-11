import * as types from '../actions/types';

export default (state = { response: null, error: '' }, action) => {
    switch (action.type) {
        case types.SIGNUP:
            return {
                status: action.payload.status,
                response: action.payload.data,
                error: '',
            };
        case types.SIGNUP_ERROR:
            return {
                status: action.payload.response.status,
                response: null,
                error: action.payload.response.data.error
            };
        case types.SIGNUP_DEFAULT:console.log('reset reducer');
            return {
                status: null,
                response: null,
                error: ''
            };
        default: return state;
    }
}