import React from 'react';

export default function Link ({active, children, onClick}) {
    if (active) {
        return <span>{props.children}</span>;
    }
    return (
        <a href="#" onClick={e => {
            e.preventDefault();
            onClick();
        }}>{props.children}</a>
    )
}