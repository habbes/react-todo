import React from 'react';
import store from './store';
import Link from './Link';

export default class FilterLink extends React.Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
        const state = this.state;
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
        )
    }
}