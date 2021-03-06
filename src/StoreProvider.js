import React from 'react';
import PropTypes from 'prop-types';

export default class StoreProvider extends React.Component {
    getChildContext () {
        return {
            store: this.props.store
        };
    }

    render () {
        return this.props.children;
    }
}

StoreProvider.childContextTypes = {
    store: PropTypes.object
};
