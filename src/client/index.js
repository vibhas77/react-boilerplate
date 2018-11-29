import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers/index';
import App from './app'

const initialState = window.__INITIAL_STATE__; // eslint-disable-line

const store = createStore(reducers, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))
