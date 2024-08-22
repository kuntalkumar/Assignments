import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard userId={userId} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserId={setUserId} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
