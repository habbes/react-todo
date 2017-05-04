import React from 'react';
import { generateId } from './TodoService';
import TodoInput from './TodoInput';

export default function AddTodo ({store}) {
    return (
        <TodoInput onAddTodo={text => 
            store.dispatch({
                type: 'ADD_TODO',
                id: generateId(),
                text
            })} />
    )
}