import { connect } from 'react-redux';
import { filterTodos } from '../services/todo';
import { toggleTodo } from '../services/actions';
import TodoList from '../components/TodoList';

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
        onTodoClick(id) {
            dispatch(toggleTodo(id))
        }
    }
}