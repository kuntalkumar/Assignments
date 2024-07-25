// src/store.js
import { createStore } from 'redux';
import dataReducer from './reducers';
// import dataReducer from './reducers/dataReducer';

// const rootReducer = combineReducers({
//   data: dataReducer ,
// });
const store = createStore(dataReducer);

export default store;
