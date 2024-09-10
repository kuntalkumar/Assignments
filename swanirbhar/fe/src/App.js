import React from 'react';
import { Box, Container, Button } from '@chakra-ui/react';
import { Route, Routes, Link } from 'react-router-dom';
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <Box p={4} bg="gray.200" minHeight="100vh">
      <Container maxW="container.xl">
        <Box as="nav" mb={6} p={4} bg="gray.800" color="white">
          <Button as={Link} to="/" mr={4} variant="link" color="white" fontSize={{ base: 'sm', md: 'md' }}>Home</Button>
          <Button as={Link} to="/create" variant="link" color="white" fontSize={{ base: 'sm', md: 'md' }}>Create Todo</Button>
        </Box>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/create' element={<CreateTodo />} />
          <Route path='/edit' element={<EditTodo />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
