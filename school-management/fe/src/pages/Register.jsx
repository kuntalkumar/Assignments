import React, { useContext } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);

  return (
    <Box maxW="sm" mx="auto" mt={8} p={6} bg="white" shadow="md" borderRadius="md">
      <Heading mb={6} textAlign="center">Register</Heading>
      <AuthForm onSubmit={register} isRegister />
    </Box>
  );
};

export default Register;
