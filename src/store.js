import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import reducer from './services/reducer';
import { loadState, saveState } from './services/local-storage';

const persistedState = loadState();
const store = createStore(reducer, persistedState);

// throttle the call to saveState so it's called at most once
// per second to avoid to made invocation since the save state
// is exponsive due to JSON serialization
store.subscribe(throttle(()=> {
    saveState({
        todos: store.getState().todos
    })
}, 1000));

export default store;