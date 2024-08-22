import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token && userId) {
          const response = await axios.get(`http://localhost:8080/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data', error);
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };
    fetchUser();
  }, [navigate, userId]);

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 18) return 'Afternoon';
    return 'Evening';
  };

  if (!user) return <Text>Loading...</Text>;

  return (
    <Box maxW="sm" mx="auto" mt={10} textAlign="center">
      <Heading mb={4}>Good {getTimeOfDay()}, {user.firstName} {user.lastName}</Heading>
      <Image src={user.profilePicture} alt="Profile" boxSize="350px" borderRadius="full" />
      <Text mt={2}>Mobile: {user.mobileNumber}</Text>
    </Box>
  );
};

export default Dashboard;
