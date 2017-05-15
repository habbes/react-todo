import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/Root';
import configureStore from './services/configure-store';

const store = configureStore();

ReactDOM.render(
    <Root store={ store } />,
    document.getElementById('root')
);
