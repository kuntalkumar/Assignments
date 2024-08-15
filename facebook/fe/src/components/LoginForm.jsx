import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { loginUser } from '../api';

const LoginForm = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);
      setToken(data.token);
      toast({ title: 'Login successful!', status: 'success', duration: 2000 });
      setFormData({ email: '', password: '' });
    } catch (error) {
      toast({ title: error.message, status: 'error', duration: 2000 });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Login</Button>
      </form>
    </Box>
  );
};

export default LoginForm;
