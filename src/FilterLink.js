import React from 'react';

export default function FilterLink (props) {
    if (props.filter === props.currentFilter) {
        return <span>{props.children}</span>;
    }
    return (
        <a href="#" onClick={e => {
            e.preventDefault();
            props.onClick(props.filter);
        }}>{props.children}</a>
    )
}