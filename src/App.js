import React from 'react';
import Input from './Input';
import TodoList from './TodoList';
import { createTodo } from './TodoService';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            todos: props.store.getState()
        };
        this.handleAdd = this.handleAdd.bind(this);
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
        this.addTodo(createTodo(text));
    }

    addTodo (todo) {
        this.props.store.dispatch({
            type: 'ADD_TODO',
            todo
        });
    }
    
    render () {
        return (
            <div>
                <Input onAdd={this.handleAdd}/>
                <TodoList todos={ this.props.store.getState() }/>
            </div>
        )
    }
}

export default App;