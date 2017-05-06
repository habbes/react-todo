import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateId } from './TodoService';
import TodoInput from './TodoInput';

const AddTodo = connect(null, mapDispatchToProps)(TodoInput);
export default AddTodo;

function mapDispatchToProps (dispatch) {
    return {
        onAddTodo: text => {
            dispatch({
                type: 'ADD_TODO',
                id: generateId(),
                text
            });
        }
    }
}