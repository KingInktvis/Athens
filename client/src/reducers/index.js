import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signup from './signup';
import signin from './signin';
import createProposal from './create-proposal';
import proposals from './proposals';

export default combineReducers({
    form: formReducer,
    signup,
    signin,
    createProposal,
    proposals
});