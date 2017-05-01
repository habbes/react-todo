import React from 'react';
import Input from './Input';
import TodoList from './TodoList';
import FilterControls from './FilterControls';
import { generateId } from './TodoService';

export default class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todos: props.store.getState()
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = this.props.store.subscribe(() => {
            this.setState(this.props.store.getState());
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    handleAdd (text) {
        const id = generateId();
        this.addTodo(id, text);
    }

    handleTodoClick (todoId) {
        this.toggleTodo(todoId);
    }

    handleFilter (filter) {
        this.props.store.dispatch({
            type: 'SET_FILTER',
            filter
        });
    }

    addTodo (id, text) {
        this.props.store.dispatch({
            type: 'ADD_TODO',
            id,
            text
        });
    }

    toggleTodo (id) {
        this.props.store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }
    
    render () {
        const {filter, todos} = this.props.store.getState();
        const filteredTodos = filterTodos(todos, filter);
        return (
            <div>
                <Input onAddTodo={this.handleAdd} />
                <TodoList todos={ filteredTodos }
                    onTodoClick={this.handleTodoClick} />
                <FilterControls currentFilter={filter} onFilter={this.handleFilter} />
            </div>
        )
    }
}

function filterTodos (todos, filter) {
    return todos.filter(t => 
        (filter === 'SHOW_ALL')
        || (filter === 'SHOW_COMPLETED' && t.completed)
        || (filter === 'SHOW_ACTIVE' && !t.completed)
    );
}