import { createStore, combineReducers, } from 'redux';
import cliant from '../Reducers/cliant'
import professional from '../Reducers/professional'

const reducer = combineReducers({ cliant,professional});

const store = createStore(reducer);
window.store = store;
export default store;