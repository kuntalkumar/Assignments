import React, { useContext } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <Box maxW="sm" mx="auto" mt={8} p={6} bg="white" shadow="md" borderRadius="md">
      <Heading mb={6} textAlign="center">Login</Heading>
      <AuthForm onSubmit={login} />
    </Box>
  );
};

export default Login;
