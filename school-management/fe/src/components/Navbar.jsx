import React, { useContext } from 'react';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
            Assignment Manager
          </Link>
        </Box>

        <Flex alignItems="center">
          {user ? (
            <>
              <Link as={RouterLink} to="/dashboard" color="white" mr={4}>
                Dashboard
              </Link>
              <Button onClick={logout} colorScheme="teal" variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link as={RouterLink} to="/login" color="white" mr={4}>
                Login
              </Link>
              <Link as={RouterLink} to="/register" color="white">
                Register
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
