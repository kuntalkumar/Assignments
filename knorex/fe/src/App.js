import React, { useState, useEffect } from 'react';
import { ChakraProvider, Button, Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Spinner } from '@chakra-ui/react';
import SignUpForm from './components/SighnUpForm.jsx';
import DeleteConfirmation from './components/DeleteConfirmation';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://knorex-be.onrender.com/alluser');
      const data = await response.json();
      setUsers(data);
    };
console.log(users)
    fetchUsers();
  }, [loading,isSignUpOpen]);

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
    <div>

 
      <Box p={4}>
        <Button colorScheme="blue" onClick={() => setIsSignUpOpen(true)}>SIGN UP</Button>
        <Button
          colorScheme="green"
          onClick={handleExport}
          isDisabled={selectedUsers.length === 0}
          ml={2}
        >
          EXPORT
        </Button>

        {loading && <Spinner size="lg" />}

        <Table mt={4}>
          <Thead>
            <Tr>
              <Th>Select</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>



            {users?.map((user) => (
              <Tr key={user._id}>
                <Td>
                  <Checkbox
                    isChecked={selectedUsers.includes(user._id)}
                    onChange={() => handleSelectUser(user._id)}
                  />
                </Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email}</Td>
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


      </div>

  );
}
export default App;
