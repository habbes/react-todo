import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateId } from './TodoService';
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