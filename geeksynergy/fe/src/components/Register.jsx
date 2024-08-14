import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    profession: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://backendgeeksenergyyyy.onrender.com/api/users/register', formData)
      .then(response => {
        setMessage(response.data.message);
        navigate("/");
      })
      .catch(error => setMessage('Error registering user'));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phoneNo">Phone No</label>
                  <input
                    type="text"
                    id="phoneNo"
                    name="phoneNo"
                    className="form-control"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="profession">Profession</label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    className="form-control"
                    placeholder="Enter your profession"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              {message && <p className="text-center mt-3 text-danger">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
