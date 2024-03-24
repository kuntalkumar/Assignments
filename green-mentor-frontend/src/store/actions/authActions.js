// src/store/actions/authActions.js

export const login = (credentials) => {
    return async (dispatch, getState) => {
        try {
            // Make API call to login endpoint
            const response = await fetch('https://your-api-url.com/login', {
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
            // Extract the token from the response data
            const token = data.token;
            // Save the token to localStorage or Redux store for future use
            localStorage.setItem('token', token);
            // Include the token in the Authorization header for future requests
            const authHeader = 'Bearer ' + token;
  
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
            const response = await fetch('https://your-api-url.com/signup', {
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
            dispatch({ type: 'REGISTER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'REGISTER_ERROR', payload: error.message });
        }
    };
  };
  