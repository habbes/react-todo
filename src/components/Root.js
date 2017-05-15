import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

export default function Root ({ store }) {
    return (
        <Provider store={ store }>
            <Router>
                <Route path="/" component={ App } />
            </Router>
        </Provider>
    );
}