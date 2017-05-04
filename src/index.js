import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import store from './store';

ReactDOM.render(
    <App store={ store } />,
    document.getElementById('root')
);
