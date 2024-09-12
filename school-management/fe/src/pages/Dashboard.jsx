import React from 'react';
import { Box } from '@chakra-ui/react';
import Assignments from '../components/Assignments';

const Dashboard = () => {
  return (
    <Box maxW="lg" mx="auto" mt={8}>
      <Assignments />
    </Box>
  );
};

export default Dashboard;
