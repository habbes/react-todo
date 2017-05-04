import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

export default class FilterLink extends React.Component {

    componentDidMount () {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
        const { store } = this.context;
        const state = store.getState();
        const {filter, children} = this.props;

        return (
            <Link active={filter === state.filter}
                onClick={() => 
                    store.dispatch({
                        type: 'SET_FILTER',
                        filter: filter
                    })}>
                {children}
            </Link>
        );
    }
}

FilterLink.contextTypes = {
    store: PropTypes.object
};