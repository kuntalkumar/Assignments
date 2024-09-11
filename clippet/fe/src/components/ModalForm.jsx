// src/components/ModalForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ModalForm({ show, handleClose, type, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '', name: '', phone: '', profession: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'register' && !validatePhoneNumber(formData.phone)) {
      setError('Phone number must be 10 digits long');
      return;
    }
    try {
      const url = type === 'login' ? 'http://localhost:8080/api/users/login' : 'http://localhost:8080/api/users/register';
      const res = await axios.post(url, formData);
      localStorage.setItem('token', res.data.token);
      alert(res.data.msg);
      if (type === 'login') {
        onLoginSuccess(); 
        navigate('/users')
      } else {
        navigate('/login'); 
      }
      handleClose();
    } catch (error) {
      setError(error.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'login' ? 'Login' : 'Register'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          {type === 'register' && (
            <>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Phone number must be 10 digits long"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formProfession">
                <Form.Label>Profession</Form.Label>
                <Form.Control
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </>
          )}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {type === 'login' ? 'Login' : 'Register'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
