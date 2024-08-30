import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const setTokenHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setToken={setTokenHandler} />} />
          <Route path="/chat" element={token ? <Chat token={token} /> : <Login setToken={setTokenHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
