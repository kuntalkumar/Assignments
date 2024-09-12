// components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink, Spacer } from '@chakra-ui/react';

const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");

  function handleLogout() {
    // Clear token from localStorage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate('/login');
  }

  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="lg">Todo App</Heading>
        <Spacer />
        <Flex>
          {auth ? (
            <>
              <ChakraLink as="button" onClick={handleLogout} p={4} fontSize="lg">Logout</ChakraLink>
              <ChakraLink as={Link} to="/todo" p={4} fontSize="lg">Todo</ChakraLink>
            </>
          ) : (
            <>
              <ChakraLink as={Link} to="/" p={4} fontSize="lg">Login</ChakraLink>
              <ChakraLink as={Link} to="/signup" p={4} fontSize="lg">Signup</ChakraLink>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
