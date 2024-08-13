import React, { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Column from "./Colums/Column";

const Assignment = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('http://localhost:3000/blocks');
        const data = await res.json();

        // Ensure the fetched data is an array
        if (Array.isArray(data)) {
          setTodos(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <Box bg="gray.800" p={6} minHeight="100vh">
      <Flex
        direction="row"
        justify="space-around"
        alignItems="start"
      >
        <Column title="Todo" status={1} todos={todos} setTodos={setTodos} color="blue.500" />
        <Column title="In Progress" status={2} todos={todos} setTodos={setTodos} color="orange.400" />
        <Column title="Done" status={3} todos={todos} setTodos={setTodos} color="green.500" />
      </Flex>
    </Box>
  );
};

export default Assignment;
