import * as types from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_PROPOSAL:
            return {
                [action.payload.id]: action.payload,
                ...state
            };
        case types.FETCH_PROPOSAL_ERROR:
            return {
                [action.payload.id]: {
                    status: action.payload.status,
                    error: true
                },
                ...state
            };
        default:
            return state
    }
}