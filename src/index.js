import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);