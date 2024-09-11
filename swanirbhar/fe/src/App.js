import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
  <ChakraProvider>
<Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit" element={<EditTodo />} />
      </Routes>
  </ChakraProvider>
      
    
  );
}

export default App;
