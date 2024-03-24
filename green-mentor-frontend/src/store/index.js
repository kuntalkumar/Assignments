    import { createStore, applyMiddleware, combineReducers } from 'redux';
    import thunk from 'redux-thunk';
    import { composeWithDevTools } from 'redux-devtools-extension';
    import authReducer from './reducers/authReducer';
    import todoReducer from './reducers/todoReducer';

    const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer
    });

    const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

    export default store;
