import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://backendgeeksenergyyyy.onrender.com/api/users/login', formData)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful');
        // Redirect to homepage
        navigate("./homepage")
      })
      .catch(error => setMessage('Error logging in'));
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        
      </form>
     

      {message &&<div>
        <p>{message}</p>
      <button type="submit" onClick={()=>{
        navigate("./register")
      }}  className="btn btn-primary">Register</button>
      </div> }

      </div>
  );
}

export default Login;
