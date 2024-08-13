import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

const SingleTodo = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TODO',
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      bg="gray.800"
      p={3}
      borderRadius="md"
      boxShadow="md"
      opacity={isDragging ? 0.5 : 1}
      mb={3}
    >
      <Text fontWeight="bold">{todo.name}</Text>
      <Text fontSize="sm">{todo.description}</Text>
    </Box>
  );
};

export default SingleTodo;
