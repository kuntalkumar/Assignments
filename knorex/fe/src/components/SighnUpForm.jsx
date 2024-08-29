import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react';

function SignUpForm({ isOpen, onClose, setUsers }) {

  const initialFormData = { firstName: '', lastName: '', email: '', password: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleSubmit = async () => {
    const newErrors = {};

    // Check for empty fields on form ....,
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    // If there are errors, show a toast warning ..////,
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: 'Form incomplete',
        description: 'Please fill in all required fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!formData.email.includes('@') || formData.password.length < 6) {
      toast({
        title: 'Invalid input',
        description: 'Please check your email and password.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('https://knorex-be.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const newUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);

      toast({
        title: 'User added',
        description: 'The user has been successfully added.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      onClose();
      setFormData(initialFormData);

    } catch (error) {
      toast({
        title: 'Sign up failed',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4} isInvalid={errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <FormErrorMessage>{errors.firstName}</FormErrorMessage>}
          </FormControl>
          <FormControl mb={4} isInvalid={errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <FormErrorMessage>{errors.lastName}</FormErrorMessage>}
          </FormControl>
          <FormControl mb={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>
          <FormControl mb={4} isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button colorScheme="blue" ml={3} onClick={handleSubmit}>
            Sign Up
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SignUpForm;
