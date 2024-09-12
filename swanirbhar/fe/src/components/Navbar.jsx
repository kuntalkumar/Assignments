// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink, Spacer, Button } from '@chakra-ui/react';

const NavigationBar = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="lg">MyApp</Heading>
        <Spacer />
        <Flex>
          <ChakraLink as={Link} to="/" p={4} fontSize="lg">Login</ChakraLink>
          <ChakraLink as={Link} to="/signup" p={4} fontSize="lg">Signup</ChakraLink>
          <ChakraLink as={Link} to="/todo" p={4} fontSize="lg">Todo</ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
