import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import App from './App';

render();
store.subscribe(render);

function render () {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
