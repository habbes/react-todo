import React from 'react';
import store from './store';
import Link from './Link';

export default class FilterLink extends React.Component {

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
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