import React from 'react';
import store from './store';
import { generateId } from './TodoService';
import TodoInput from './TodoInput';

export default function AddTodo () {
    return (
        <TodoInput onAddTodo={text => 
            store.dispatch({
                type: 'ADD_TODO',
                id: generateId(),
                text
            })} />
    )
}