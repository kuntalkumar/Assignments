import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AssignmentDetails = () => {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      const response = await axios.get(`/assignments/${id}`);
      setAssignment(response.data);
    };

    fetchAssignment();
  }, [id]);

  if (!assignment) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4} bg="white" shadow="md" borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold">{assignment.title}</Text>
      <Text>{assignment.description}</Text>
      <Text>Status: {assignment.status}</Text>
      <Button mt={4} colorScheme="teal">Edit Assignment</Button>
    </Box>
  );
};

export default AssignmentDetails;
