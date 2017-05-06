import { generateId } from './TodoService';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

export function addTodo (text) {
    return {
        type: ADD_TODO,
        id: generateId(),
        text
    }
}

export function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function setFilter (filter) {
    return {
        type: SET_FILTER,
        filter
    }
}