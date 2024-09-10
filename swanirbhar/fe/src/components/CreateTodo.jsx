import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Heading } from '@chakra-ui/react';

const CreateTodo = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      task,
      status: "pending",
      priority,
    };

    try {
      const res = await fetch("http://localhost:8080/addtask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (res.ok) {
        navigate("/");
      } else {
        console.error("Error:", await res.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={5} maxW="md" mx="auto">
      <Heading mb={4}>Create New Todo</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Task</FormLabel>
            <Input
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Priority</FormLabel>
            <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Select>
          </FormControl>
          <Button colorScheme="blue" type="submit">Add Todo</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateTodo;
