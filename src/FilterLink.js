import React from 'react';
import Link from './Link';

export default class FilterLink extends React.Component {

    componentDidMount () {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
        const { store } = this.props;
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