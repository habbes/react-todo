import { connect } from 'react-redux';
import { filterTodos } from './TodoService';
import { toggleTodo } from './actions';
import TodoList from './TodoList';

const FilteredTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default FilteredTodoList;

function mapStateToProps (state) {
    const { todos, filter } = state;
    return {
        todos: filterTodos(todos, filter)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}