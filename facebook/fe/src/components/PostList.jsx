import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, VStack, Spinner } from '@chakra-ui/react';
import { fetchPosts } from '../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <VStack spacing={4} mt={8}>
      {posts.map((post) => (
        <Box key={post._id} borderWidth={1} borderRadius="md" p={4} maxW="md" w="full">
          <Heading as="h3" size="md">{post.title}</Heading>
          <Image src={post.image.src} alt={post.title} mt={4} />
          <Text mt={4}>{post.description}</Text>
          <Text mt={4} fontWeight="bold">{post.author}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default PostList;
