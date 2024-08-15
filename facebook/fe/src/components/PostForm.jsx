import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { createPost } from '../api';

const PostForm = ({ token, onPostCreated }) => {
  const [formData, setFormData] = useState({ title: '', image: '', description: '', author: '' });
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post = await createPost(formData, token);
      onPostCreated(post);
      toast({ title: 'Post created successfully!', status: 'success', duration: 2000 });
      setFormData({ title: '', image: '', description: '', author: '' });
    } catch (error) {
      console.error(error.message); // Log errors
      toast({ title: error.message, status: 'error', duration: 2000 });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb={4}>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </FormControl>
        <FormControl id="image" mb={4}>
          <FormLabel>Image URL</FormLabel>
          <Input type="text" name="image" value={formData.image} onChange={handleChange} required />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Description</FormLabel>
          <Input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </FormControl>
        <FormControl id="author" mb={4}>
          <FormLabel>Author</FormLabel>
          <Input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
      </form>
    </Box>
  );
};

export default PostForm;
