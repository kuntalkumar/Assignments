// src/components/PrivateRoutes.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token');

  return token ? Element : <Navigate to="/login" />;
};

export default PrivateRoute;
