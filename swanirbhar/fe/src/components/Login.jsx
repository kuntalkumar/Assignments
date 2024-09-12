import React, { useState, useContext } from 'react';
import { Box, Button, Input, Heading, VStack } from '@chakra-ui/react';
// import {  context } from '../App';
import { useNavigate } from 'react-router-dom';
import { context } from '../App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/login', {
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
          // setIsAuthenticate(true  )
          navigate('/todo');
        } else {
          alert(data.message);
          navigate("/signup")
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
