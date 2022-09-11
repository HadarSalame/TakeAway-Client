import { createStore, combineReducers } from 'redux';
import produce from 'immer';
import order from '../Reducers/order'
import professional from '../Reducers/professional'
import cliant from '../Reducers/cliant'

const reducer = combineReducers({Order:order,Professional:professional,Cliant:cliant})

const store = createStore(reducer);
window.store = store;
export default store;