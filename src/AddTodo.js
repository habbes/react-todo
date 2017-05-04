import React from 'react';
import PropTypes from 'prop-types';
import { generateId } from './TodoService';
import TodoInput from './TodoInput';

export default function AddTodo (props, {store}) {
    return (
        <TodoInput onAddTodo={text => 
            store.dispatch({
                type: 'ADD_TODO',
                id: generateId(),
                text
            })} />
    );
}

AddTodo.contextTypes = {
    store: PropTypes.object
};