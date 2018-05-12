import * as types from '../actions/types';

export default (state = {error: ''}, action) => {
    switch (action.type) {
        case types.SIGNIN:
            const token = action.payload.token;
            localStorage.setItem('token', token);
            return {
                token
            };
        case types.SIGNIN_ERROR:
            return {
                status: action.payload.response.status,
                token: null,
                error: action.payload.response.data.error
            };
        default:
            return state;
    }
}