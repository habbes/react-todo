import ReactDOM from 'react-dom';
import React from 'react';
import Provider from './StoreProvider';
import App from './App';
import store from './store';

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);
