// src/components/ModalForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ModalForm({ show, handleClose, type, onLoginSuccess }) {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', password: '', name: '', phone: '', profession: '' });
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await axios.post('https://clippet-be.onrender.com/api/users/login', loginData);
      localStorage.setItem('token', res.data.token);
      alert("Logged in Successfully");
      onLoginSuccess(); 
      navigate('/users');
      handleClose();
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.response?.data?.msg || 'An error occurred');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(registerData.phone)) {
      setRegisterError('Phone number must be 10 digits long');
      return;
    }
    setRegisterLoading(true);
    try {
      const res = await axios.post('https://clippet-be.onrender.com/api/users/register', registerData);
      alert("Registered Successfully");
      navigate('/login');
      handleClose();
    } catch (error) {
      console.error('Register error:', error);
      setRegisterError(error.response?.data?.msg || 'An error occurred');
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'login' ? 'Login' : 'Register'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {(loginError && type === 'login') && (
          <Alert variant="danger">
            {loginError}
          </Alert>
        )}
        {(registerError && type === 'register') && (
          <Alert variant="danger">
            {registerError}
          </Alert>
        )}
        <Form onSubmit={type === 'login' ? handleLoginSubmit : handleRegisterSubmit}>
          {type === 'login' ? (
            <>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  disabled={loginLoading}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  disabled={loginLoading}
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={loginLoading}>
                {loginLoading ? (
                  <>
                    <Spinner animation="border" size="sm" />
                    <span className="ms-2">Loading...</span>
                  </>
                ) : 'Login'}
              </Button>
            </>
          ) : (
            <>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  pattern="[0-9]{10}"
                  title="Phone number must be 10 digits long"
                  required
                  disabled={registerLoading}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formProfession">
                <Form.Label>Profession</Form.Label>
                <Form.Control
                  type="text"
                  name="profession"
                  value={registerData.profession}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={registerLoading}>
                {registerLoading ? (
                  <>
                    <Spinner animation="border" size="sm" />
                    <span className="ms-2">Loading...</span>
                  </>
                ) : 'Register'}
              </Button>
            </>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
