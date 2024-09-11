import React, { useState, useContext } from 'react';
import { Box, Button, Input, Heading, VStack } from '@chakra-ui/react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://telecrmbe.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          navigate('/');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error('Error logging in:', error));
  };

  return (
    <VStack spacing="5" align="center" mt="20">
      <Heading>Login</Heading>
      <Box as="form" w="300px" onSubmit={handleSubmit}>
        <Input
          mb="3"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          mb="3"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" type="submit" width="full">
          Login
        </Button>
      </Box>
    </VStack>
  );
};

export default Login;
