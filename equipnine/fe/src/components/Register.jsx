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

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const toast = useToast();

  const onSubmit = async (data) => {
    console.log({ ...data, profilePicture: profilePictureURL || profilePicture });
    toast({
      title: 'Registration Successful',
      description: `Welcome, ${data.firstName} ${data.lastName}!`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
      setProfilePictureURL(''); // Clear the manual URL when a file is selected
    }
  };

  const handleURLChange = (e) => {
    setProfilePictureURL(e.target.value);
    setProfilePicture(null); // Clear the file input when a URL is entered
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

          <FormControl>
            <FormLabel>Profile Picture</FormLabel>
            <Input
              type="text"
              placeholder="Enter image URL or leave blank"
              value={profilePictureURL}
              onChange={handleURLChange}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              mt={2}
            />
            {(profilePictureURL || profilePicture) && (
              <img
                src={profilePictureURL || profilePicture}
                alt="Profile Preview"
                style={{ marginTop: '10px', maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
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
