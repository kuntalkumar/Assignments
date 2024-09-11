// src/components/Users.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import './Users.css'; // Make sure to import a custom CSS file

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://clippet-be.onrender.com/api/users', {
          headers: { 'x-auth-token': token }
        });
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error.response?.data || error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <Row>
        {users.map(user => (
          <Col md={4} key={user._id} className="mb-4">
            <Card className="shadow-lg border-primary">
              <Card.Body>
                <Card.Title className="text-primary">{user.name}</Card.Title>
                <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
                <Card.Text><strong>Phone:</strong> {user.phone}</Card.Text>
                <Card.Text><strong>Profession:</strong> {user.profession}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Users;
