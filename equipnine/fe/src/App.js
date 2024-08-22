import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if the user is logged in and fetch user data
    const token = localStorage.getItem('token');
    if (token) {
      // Example call to get user info
      fetchUserInfo(token);
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const response = await fetch('http://localhost:8080/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUserName(data.firstName);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      setIsLoggedIn(false);
    }
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
