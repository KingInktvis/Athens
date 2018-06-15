import * as types from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.PROPOSAL_LIST:
            return action.payload;
        default:
            return state;
    }
}