import React from 'react';
import { Box, Flex, Link, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold">Equip9</Box>
        <Flex alignItems="center">
         
          <RouterLink to="/login">
            <Button as={Link} mx={2} variant="ghost">
              Login
            </Button>
          </RouterLink>
          <RouterLink to="/signup">
            <Button as={Link} mx={2} variant="ghost">
              Signup
            </Button>
          </RouterLink>
          <RouterLink to="/dashboard">
            <Button as={Link} mx={2} variant="ghost">
              Dashboard
            </Button>
          </RouterLink>
          <Button onClick={toggleColorMode} mx={2}>
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
