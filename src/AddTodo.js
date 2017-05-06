import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoInput from './TodoInput';

const AddTodo = connect(null, mapDispatchToProps)(TodoInput);
export default AddTodo;

function mapDispatchToProps (dispatch) {
    return {
        onAddTodo: text => {
            dispatch(addTodo(text));
        }
    }
}