// src/components/Register.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { register } from '../store/actions/authActions';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(register({ name, email, password }))
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
      });
  };

  return (
    <div className='register-container'>
    <h2>Register </h2>
      <input type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
