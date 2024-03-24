
const initialState = {
    todos: [],
    error: null
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return {
          ...state,
          todos: action.payload,
          error: null
        };
      case 'FETCH_TODOS_ERROR':
        return {
          ...state,
          todos: [],
          error: action.payload
        };
      case 'ADD_TODO_SUCCESS':
        return {
          ...state,
          todos: [...state.todos, action.payload],
          error: null
        };
      case 'ADD_TODO_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'UPDATE_TODO_SUCCESS':
        const updatedTodos = state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload.data };
          } else {
            return todo;
          }
        });
        return {
          ...state,
          todos: updatedTodos,
          error: null
        };
      case 'UPDATE_TODO_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'DELETE_TODO_SUCCESS':
        const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
        return {
          ...state,
          todos: filteredTodos,
          error: null
        };
      case 'DELETE_TODO_ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  