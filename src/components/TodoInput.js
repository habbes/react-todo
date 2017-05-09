import React from 'react';

export default function TodoInput ({onAddTodo}) {
    let input;
    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={() => {
                onAddTodo(input.value);
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
}