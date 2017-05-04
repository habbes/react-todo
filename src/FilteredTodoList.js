import React from 'react';
import store from './store';
import { filterTodos } from './TodoService';
import TodoList from './TodoList';

export default class FilteredTodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => 
           this.forceUpdate()
        );
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
        const todos = filterTodos(this.state.todos);
        return (
            <TodoList todos={todos}
                onTodoClick={id => 
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    }) } />
        );
    }
}