import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { registerUser } from '../api';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phoneNo: '' });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast({ title: 'Registration successful!', status: 'success', duration: 2000 });
      setFormData({ name: '', email: '', password: '', phoneNo: '' });
    } catch (error) {
      toast({ title: error.message, status: 'error', duration: 2000 });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </FormControl>
        <FormControl id="phoneNo" mb={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Register</Button>
      </form>
    </Box>
  );
};

export default RegisterForm;