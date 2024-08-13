import React, { useState, useEffect } from 'react';
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

  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let intervalId;

    if (isDragging) {
      intervalId = setInterval(() => {
        setCurrTime(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      setCurrTime(new Date().toLocaleTimeString());
    }

    return () => clearInterval(intervalId);
  }, [isDragging]);

  const laneText = () => {
    switch (todo.laneId) {
      case 1:
        return <Text fontSize="sm">{todo.history[0]}</Text>;
      case 2:
        return <Text fontSize="sm">Pending</Text>;
      case 3:
        return <Text fontSize="sm">Done</Text>;
      default:
        return null;
    }
  };

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
      {laneText()}
      <Text fontSize="xs" color="gray.400">{currTime}</Text>
    </Box>
  );
};

export default SingleTodo;
