import { createStore, combineReducers } from 'redux';
import produce from 'immer';
import order from '../Reducers/order'
import professional from '../Reducers/professional'
import cliant from '../Reducers/cliant'
import bid from '../Reducers/bid'

const reducer = combineReducers({Order:order,Professional:professional,Cliant:cliant,Bid:bid})

const store = createStore(reducer);
window.store = store;
export default store;