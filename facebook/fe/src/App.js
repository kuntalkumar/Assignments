import React, { useState } from 'react';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(true);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={4}>
        <Button onClick={toggleForm} mb={4}>
          {showRegister ? 'Switch to Login' : 'Switch to Register'}
        </Button>
        {showRegister ? (
          <RegisterForm />
        ) : (
          <LoginForm setToken={setToken} />
        )}
        {token && (
          <>
            <PostForm token={token} onPostCreated={() => {}} />
            <PostList />
          </>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
