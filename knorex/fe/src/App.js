import React, { useState, useEffect } from 'react';
import {
  Button,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Spinner,
  IconButton,
  useColorMode,
  useColorModeValue,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import SignUpForm from './components/SighnUpForm.jsx';
import DeleteConfirmation from './components/DeleteConfirmation';
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const { toggleColorMode } = useColorMode();
  const navbarBg = useColorModeValue('teal.500', 'teal.800');
  // const navbarBg = useColorModeValue('teal.500', 'teal.800');
  const navbarTextColor = useColorModeValue('white', 'gray.200');
  const pageBg = useColorModeValue('#E6F7FF', 'gray.900');  
  const tableBg = useColorModeValue('#CCE7FF', 'gray.800'); 
  const tableTextColor = useColorModeValue('gray.800', 'gray.200'); 
  const checkBoxColor = useColorModeValue('red', 'gray.200'); 

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://knorex-be.onrender.com/alluser`);
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, [loading, isSignUpOpen]);

  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
    );
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    await fetch(`https://knorex-be.onrender.com/delete/${id}`, { method: 'DELETE' });
    setUsers(users.filter((user) => user.id !== id));
    setLoading(false);
    setIsDeleteOpen(false);
  };

  const handleExport = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const selectedUserData = users.filter((user) => selectedUsers.includes(user._id));
    const csvContent = `id,email,first_name,last_name\n${selectedUserData
      .map((user) => `${user._id},${user.email},${user.firstName},${user.lastName}`)
      .join('\n')}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'users.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setLoading(false);
  };

  return (
    <Box bg={pageBg} minHeight="100vh" p={4}>
      <Flex justify="space-between" align="center" bg={navbarBg} p={4} borderRadius="md" mb={6} boxShadow="md">
        <Heading color={navbarTextColor} size="lg">User Management</Heading>
        <Flex align="center">
          <IconButton
            aria-label="Toggle light/dark mode"
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            mr={4}
            colorScheme="yellow"
          />
          {loading && <Spinner size="lg" color="white" mr={4} />}
          <Button colorScheme="blue" onClick={() => setIsSignUpOpen(true)}>SIGN UP</Button>
          <Button
            colorScheme="green"
            onClick={handleExport}
            isDisabled={selectedUsers.length === 0}
            ml={2}
          >
            EXPORT
          </Button>
        </Flex>
      </Flex>

      <Box bg={tableBg} p={4} borderRadius="md" boxShadow="md">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={tableTextColor}>Select</Th>
              <Th color={tableTextColor}>Full Name</Th>
              <Th color={tableTextColor}>Email</Th>
              <Th color={tableTextColor}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user) => (
              <Tr key={user._id}>
                <Td>
                <Checkbox
  isChecked={selectedUsers.includes(user._id)}
  onChange={() => handleSelectUser(user._id)}
  colorScheme="teal" 
  sx={{
    '& .chakra-checkbox__control': {
      backgroundColor: 'white', 
      borderColor: 'gray.300', 
    },
    '& .chakra-checkbox__control[data-checked]': {
      backgroundColor: 'teal.500', 
      borderColor: 'teal.500',
    },
    '& .chakra-checkbox__icon': {
      color: 'white', 
    },
  }}
/>

                </Td>
                <Td color={tableTextColor}>{user.firstName + " " + user.lastName}</Td>
                <Td color={tableTextColor}>{user.email}</Td>
                <Td>
                  <Button 
                    colorScheme="red" 
                    onClick={() => {
                      setUserIdToDelete(user._id);
                      setIsDeleteOpen(true);
                    }}>
                    DELETE
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <SignUpForm isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} setUsers={setUsers} />
      <DeleteConfirmation 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        onDelete={() => handleDeleteUser(userIdToDelete)} 
      />
    </Box>
  );
}

export default App;
