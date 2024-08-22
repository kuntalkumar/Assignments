import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://equip9-be.onrender.com/register', data);
      toast({
        title: 'Registration Successful',
        description: `Welcome, ${data.firstName} ${data.lastName}!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description: error.response ? error.response.data.message : 'An error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your first name"
              {...register('firstName', { required: 'First Name is required' })}
            />
          </FormControl>

          <FormControl isInvalid={errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your last name"
              {...register('lastName', { required: 'Last Name is required' })}
            />
          </FormControl>

          <FormControl isInvalid={errors.mobileNumber}>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              {...register('mobileNumber', {
                required: 'Mobile Number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Mobile Number must be 10 digits',
                },
              })}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Profile Picture URL</FormLabel>
            <Input
              type="text"
              placeholder="Enter profile picture URL"
              {...register('profilePicture')}
            />
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;
