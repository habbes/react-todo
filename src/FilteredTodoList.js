import React from 'react';
import store from './store';
import { filterTodos } from './TodoService';
import TodoList from './TodoList';

export default class FilteredTodoList extends React.Component {
    componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render () {
        const {todos, filter} = store.getState();
        const filteredTodos = filterTodos(todos, filter);
        return (
            <TodoList todos={filteredTodos}
                onTodoClick={id => 
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    }) } />
        );
    }
}