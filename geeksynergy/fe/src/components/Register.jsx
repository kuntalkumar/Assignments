import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    profession: ''
  });
  const [message, setMessage] = useState('');
const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://backendgeeksenergyyyy.onrender.com/api/users/register', formData)
      .then(response => {
    setMessage(response.data.message)
      navigate("./")}
    )
      .catch(error => setMessage('Error registering user'));
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone No</label>
          <input type="text" name="phoneNo" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Profession</label>
          <input type="text" name="profession" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {message && <p>{message}</p>}


    </div>
  );
}

export default Register;
