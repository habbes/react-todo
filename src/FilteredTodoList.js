import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterTodos } from './TodoService';
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
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
    }
}