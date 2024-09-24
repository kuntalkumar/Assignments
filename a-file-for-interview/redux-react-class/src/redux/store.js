import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import {thunk} from "redux-thunk"
// Create store with middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
