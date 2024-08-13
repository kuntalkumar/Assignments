import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

import SingleTodo from './SingleTodo/SingleTodo';
// import useFetchTodos from './hook/useFetchTodos';
import useUpdateStatus from './hook/useUpdateStatus';


const Column = ({ title, status, todos, setTodos, color }) => {
  const updateStatus = useUpdateStatus(setTodos);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TODO',
    drop: (item) => {
      updateStatus(item.id, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const filteredTodos = Array.isArray(todos)
    ? todos.filter((todo) => todo.laneId === status)
    : [];

  return (
    <Box
      ref={drop}
      bg={isOver ? 'gray.600' : 'gray.700'}
      p={4}
      borderRadius="md"
      boxShadow="lg"
      minW="300px"
      m={2}
      color="white"
    >
      <Heading size="md" mb={4} color={color}>{title}</Heading>
      {filteredTodos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};

export default Column;
