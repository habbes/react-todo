import React from 'react';

export default class TodoList extends React.Component {

    renderList () {
        return this.props.todos.map((todo, i) => {
            return (
                <li key={todo.id} id={todo.id}>{todo.text}</li>
            );
        });
    }

    render () {
        return (
            <div>
                { this.renderList() }
            </div>
        );
    }
}