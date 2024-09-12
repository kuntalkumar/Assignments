import React, { useEffect, useState } from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const response = await axios.get('/assignments');
      setAssignments(response.data);
    };

    fetchAssignments();
  }, []);

  return (
    <Box mt={8}>
      <Flex justify="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Assignments</Text>
        <Button as={Link} to="/assignments/new" colorScheme="teal">New Assignment</Button>
      </Flex>
      {assignments.map((assignment) => (
        <Box key={assignment._id} p={4} bg="white" shadow="md" borderRadius="md" mb={4}>
          <Text fontSize="lg" fontWeight="bold">{assignment.title}</Text>
          <Text>{assignment.description}</Text>
          <Text>Status: {assignment.status}</Text>
          <Button as={Link} to={`/assignments/${assignment._id}`} colorScheme="blue" mt={4}>
            View Details
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Assignments;
