import axios from "axios";

const API_BASE_URL = "http://localhost:8080/";

export const fetchTodos = () => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get(`${API_BASE_URL}todo`);
        dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_TODOS_ERROR', payload: error });
      }
    };
};

export const addTodo = (todoData) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(`${API_BASE_URL}todoadd`, todoData);

        dispatch({ type: 'ADD_TODO_SUCCESS', payload:  response.data });
      } catch (error) {
        dispatch({ type: 'ADD_TODO_ERROR', payload: error });
      }
    };
};

export const updateTodo = (todoId, updatedData) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put(`${API_BASE_URL}todo/${todoId}`, updatedData);

        dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: { id: todoId, data: updatedData } });
      } catch (error) {
        dispatch({ type: 'UPDATE_TODO_ERROR', payload: error });
      }
    };
};

export const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {
      try {
        await axios.delete(`${API_BASE_URL}todo/${todoId}`);

        dispatch({ type: 'DELETE_TODO_SUCCESS', payload: todoId });
      } catch (error) {
        dispatch({ type: 'DELETE_TODO_ERROR', payload: error });
      }
    };
};
