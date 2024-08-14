import axios from 'axios';

const API_URL = 'https://backendgeeksenergyyyy.onrender.com/api/users';

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const fetchUsers = () => {
  return axios.get(API_URL);
};

export const updateUser = (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData);
};
