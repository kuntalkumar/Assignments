
const API_BASE_URL="https://green-mentor-9hti.onrender.com" 


export const fetchTodos = () => {

  return async (dispatch, getState) => {
      try {
          const token = localStorage.getItem('token'); // Retrieve the token from localStorage
          const response = await fetch(`${API_BASE_URL}/todo`, {
              headers: {
                  'Authorization': 'Bearer ' + token // Include the token in the Authorization header
              }
          });

          if (!response.ok) {

              throw new Error('Failed to fetch todos');
          }

          const data = await response.json();
          dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: data });
      } catch (error) {
          dispatch({ type: 'FETCH_TODOS_ERROR', payload: error });
      }
  };
};

export const addTodo = (todoData) => {
  return async (dispatch, getState) => {
      try {
          const token = localStorage.getItem('token'); 
          const response = await fetch(`${API_BASE_URL}todoadd`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token 
              },
              body: JSON.stringify(todoData)
          });

          if (!response.ok) {
              throw new Error('Failed to add todo');
          }

          const data = await response.json();
          dispatch({ type: 'ADD_TODO_SUCCESS', payload: data });
      } catch (error) {
          dispatch({ type: 'ADD_TODO_ERROR', payload: error });
      }
  };
};

export const updateTodo = (todoId, updatedData) => {
  return async (dispatch, getState) => {
      try {
          const token = localStorage.getItem('token'); // Retrieve the token from localStorage
          const response = await fetch(`${API_BASE_URL}todo/${todoId}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + token // Include the token in the Authorization header
              },
              body: JSON.stringify(updatedData)
          });

          if (!response.ok) {
              throw new Error('Failed to update todo');
          }

          dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: { id: todoId, data: updatedData } });
      } catch (error) {
          dispatch({ type: 'UPDATE_TODO_ERROR', payload: error });
      }
  };
};

export const deleteTodo = (todoId) => {
  return async (dispatch, getState) => {
      try {
          const token = localStorage.getItem('token'); // Retrieve the token from localStorage
          const response = await fetch(`${API_BASE_URL}todo/${todoId}`, {
              method: 'DELETE',
              headers: {
                  'Authorization': 'Bearer ' + token // Include the token in the Authorization header
              }
          });

          if (!response.ok) {
              throw new Error('Failed to delete todo');
          }

          dispatch({ type: 'DELETE_TODO_SUCCESS', payload: todoId });
      } catch (error) {
          dispatch({ type: 'DELETE_TODO_ERROR', payload: error });
      }
  };
};
