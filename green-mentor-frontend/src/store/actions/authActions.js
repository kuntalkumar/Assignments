// src/store/actions/authActions.js

export const login = (credentials) => {
  return async (dispatch, getState) => {
      try {
          // Make API call to login endpoint
          const response = await fetch('http://localhost:8080/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(credentials)
          });
          if (!response.ok) {
              throw new Error('Login failed');
          }
          const data = await response.json();
          dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      } catch (error) {
          dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      }
  };
};

export const register = (userData) => {
  return async (dispatch, getState) => {
      try {
          // Make API call to register endpoint
          const response = await fetch('http://localhost:8080/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
          });
          if (!response.ok) {
              throw new Error('Registration failed');
          }
          const data = await response.json();
          console.log(data)

          dispatch({ type: 'REGISTER_SUCCESS', payload: data });
      } catch (error) {
          dispatch({ type: 'REGISTER_ERROR', payload: error.message });
      }
  };
};
