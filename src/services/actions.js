import { generateId } from './todo';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

export const addTodo = text => ({
    type: ADD_TODO,
    id: generateId(),
    text
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
});