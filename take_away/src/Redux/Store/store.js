import { createStore, combineReducers, } from 'redux';
import produce from 'immer';
import cliant from '../Reducers/cliant'
import professional from '../Reducers/professional'

const reducer = combineReducers((state,action)=>{
    
});

const store = createStore(reducer);
window.store = store;
export default store;