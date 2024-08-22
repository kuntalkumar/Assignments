import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Input, FormControl, FormLabel, Text, VStack, useToast } from '@chakra-ui/react';

const Login = ({ setIsLoggedIn, setUserName }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        mobileNumber,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      setUserName(response.data.userName); // Ensure this is sent from the backend
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid mobile number or password');
      toast({
        title: 'Login Failed',
        description: 'Please check your credentials and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button mt={4} colorScheme="teal" type="submit">
            Login
          </Button>
          <Button mt={2} variant="link" colorScheme="teal" onClick={() => navigate('/signup')}>
            Don't have an account? Signup
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
