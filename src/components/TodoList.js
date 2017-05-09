import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList ({todos, onTodoClick}) {
    return (
        <ul>
            {todos.map(todo => 
                <TodoItem key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}/>)
            }
        </ul>
    )
}