import * as types from '../actions/types';

export default (state = { success: false }, action) => {
    switch (action.type) {
        case types.CREATE_PROPOSAL:
            return {
                success: true
            };
        case types.CREATE_PROPOSAL_ERROR:
            return {
                success: false,
                error: action.payload.message,
                status: action.payload.status
            };
        case types.CREATE_PROPOSAL_DEFAULT:
            return {
                success: false,
                error: null,
            };
        default:
            return state;
    }
}