import React from 'react';

export default function TodoItem ({onClick, text, completed}) {
    return (
        <li onClick={onClick}
            style={{textDecoration: completed? 'line-through': 'none'}}>
            {text}
        </li>
    );
}