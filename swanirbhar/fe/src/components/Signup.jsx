import React, { useState } from 'react';
import { Box, Button, Input, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://telecrmbe.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert('Signup Successful!');
          navigate('/login');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error('Error signing up:', error));
  };

  return (
    <VStack spacing="5" align="center" mt="20">
      <Heading>Sign Up</Heading>
      <Box as="form" w="300px" onSubmit={handleSubmit}>
        <Input
          mb="3"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          mb="3"
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
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
          Sign Up
        </Button>
      </Box>
    </VStack>
  );
};

export default Signup;
