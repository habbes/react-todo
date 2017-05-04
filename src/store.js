import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;

store.subscribe(() => console.log('store', store.getState()));