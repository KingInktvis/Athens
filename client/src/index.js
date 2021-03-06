import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
import { SIGNIN } from './actions/types';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const token = localStorage.getItem('token');
if (token) {
    store.dispatch({
        type: SIGNIN,
        payload: {
            token
        }
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);