import React from 'react';

export default class TodoList extends React.Component {

    renderList () {
        return this.props.todos.map((todo, i) => {
            return (
                <li key={todo.id} id={todo.id}
                    style={{textDecoration: todo.completed? 'line-through': 'none'}}
                    onClick={() => {this.props.onItemClick(todo)}}>
                    {todo.text}
                </li>
            );
        });
    }

    render () {
        return (
            <ul>
                { this.renderList() }
            </ul>
        );
    }
}