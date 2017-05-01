import React from 'react';
import Input from './Input';
import TodoList from './TodoList';
import { generateId } from './TodoService';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todos: props.store.getState()
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = this.props.store.subscribe(() => {
            this.setState({
                todos: this.props.store.getState()
            });
        });
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    handleAdd (text) {
        const id = generateId();
        this.addTodo(id, text);
    }

    handleItemClick (todo) {
        this.toggleTodo(todo.id);
    }

    addTodo (id, text) {
        this.props.store.dispatch({
            type: 'ADD_TODO',
            id,
            text
        });
    }

    toggleTodo (id) {
        this.props.store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }
    
    render () {
        return (
            <div>
                <Input onAdd={this.handleAdd} />
                <TodoList todos={ this.props.store.getState() }
                    onItemClick={this.handleItemClick} />
            </div>
        )
    }
}

export default App;