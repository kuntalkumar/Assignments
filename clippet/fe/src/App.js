// src/App.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalForm from './components/ModalForm';
import PrivateRoute from './components/PrivateRoutes';
import Users from './components/Users';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowLogin(false); // Close the login modal
    navigate('/users'); // Redirect to users page after login
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from local storage
    setLoggedIn(false);
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4 text-dark">
          {loggedIn ? 'All Users' : 'Welcome! Please Log In or Register'}
        </h2>
        {!loggedIn ? (
          <>
            <Button 
              onClick={() => setShowLogin(true)} 
              variant="primary" 
              className="me-2"
            >
              Login
            </Button>
            <Button onClick={() => setShowRegister(true)} variant="primary">
              Register
            </Button>
          </>
        ) : (
          <Button onClick={handleLogout} variant="secondary">
            Logout
          </Button>
        )}
      </div>
      <ModalForm 
        show={showLogin} 
        handleClose={() => setShowLogin(false)} 
        type="login" 
        onLoginSuccess={handleLoginSuccess} 
      />
      <ModalForm 
        show={showRegister} 
        handleClose={() => setShowRegister(false)} 
        type="register" 
      />
      <Routes>
        <Route path="/" element={!loggedIn ?(
      <div className="d-flex justify-content-center  vh-100">
        <div className="text-center">
          <h1>Welcome to our site!</h1>
          <p>Please log in or register.</p>
        </div>
      </div>
    )  : <Users />} />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </>
  );
}

export default App;
