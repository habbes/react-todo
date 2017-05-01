import { combineReducers } from 'redux';

export default combineReducers({
    todos,
    filter
});

function todos (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

function todo (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

function filter (state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;

    }
}