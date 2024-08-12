// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import swimlaneReducer from './swimlaneReducer';

const rootReducer = combineReducers({
  swimlane: swimlaneReducer,
});

export default rootReducer;
