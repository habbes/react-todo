import { createStore } from 'redux';
import reducer from './services/reducer';
import { loadState, saveState } from './services/local-storage';

const persistedState = loadState();
const store = createStore(reducer, persistedState);
store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    })
});

export default store;