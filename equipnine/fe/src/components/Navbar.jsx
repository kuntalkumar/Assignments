import React from 'react';
import { Box, Flex, Link, Button, useColorMode, useColorModeValue, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, userName }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold">Equip9</Box>
        <Flex alignItems="center">
          {isLoggedIn && location.pathname === '/dashboard' ? (
            <>
              {/* <Text mx={2}> {userName[0]}</Text> */}
              <Button onClick={handleLogout} mx={2} colorScheme="teal">
                Logout
              </Button>
            </>
          ) : (
            <>
              {location.pathname === '/login' && (
                <>
                  <RouterLink to="/register">
                    <Button as={Link} mx={2} variant="ghost">
                      Signup
                    </Button>
                  </RouterLink>
                  <RouterLink to="/dashboard">
                    <Button as={Link} mx={2} variant="ghost">
                      Dashboard
                    </Button>
                  </RouterLink>
                </>
              )}
              {location.pathname === '/register' && (
                <>
                  <RouterLink to="/login">
                    <Button as={Link} mx={2} variant="ghost">
                      Login
                    </Button>
                  </RouterLink>
                  <RouterLink to="/dashboard">
                    <Button as={Link} mx={2} variant="ghost">
                      Dashboard
                    </Button>
                  </RouterLink>
                </>
              )}
              {!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/register' && (
                <>
                  <RouterLink to="/login">
                    <Button as={Link} mx={2} variant="ghost">
                      Login
                    </Button>
                  </RouterLink>
                  <RouterLink to="/register">
                    <Button as={Link} mx={2} variant="ghost">
                      Signup
                    </Button>
                  </RouterLink>
                </>
              )}
            </>
          )}
          <Button onClick={toggleColorMode} mx={2}>
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
