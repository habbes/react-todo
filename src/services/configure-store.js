import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import reducer from './reducer';
import { loadState, saveState } from './local-storage';

export default function configureStore () {
    // load persisted state
    const state = loadState();
    const store = createStore(reducer, state);

    // throttle the call to saveState so it's called at most once
    // per second to avoid to made invocation since the save state
    // is exponsive due to JSON serialization
    store.subscribe(throttle(()=> {
        saveState({
            todos: store.getState().todos
        })
    }, 1000));

    return store;
}