import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signup from './signup';
import signin from './signin';

export default combineReducers({
    form: formReducer,
    signup,
    signin
});