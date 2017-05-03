import React from 'react';
import Input from './TodoInput';
import TodoList from './TodoList';
import Footer from './Footer';
import { generateId } from './TodoService';

export default function App ({ store }) {
    const {filter, todos} = store.getState();
    const filteredTodos = filterTodos(todos, filter);
    return (
        <div>
            <Input onAddTodo={(text) => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: text,
                    id: generateId()
                })
            }} />
            <TodoList todos={ filteredTodos }
                onTodoClick={id => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }} />
            <Footer />
        </div>
    );
}

function filterTodos (todos, filter) {
    return todos.filter(t => 
        (filter === 'SHOW_ALL')
        || (filter === 'SHOW_COMPLETED' && t.completed)
        || (filter === 'SHOW_ACTIVE' && !t.completed)
    );
}