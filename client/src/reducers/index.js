import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signup from './signup';

export default combineReducers({
    form: formReducer,
    signup
});