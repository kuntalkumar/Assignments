import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Heading } from '@chakra-ui/react';

const EditTodo = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();
  const location = useLocation();
  const taskData = location.state?.ele;

  useEffect(() => {
    if (taskData) {
      setTask(taskData.task);
      setPriority(taskData.priority);
      setStatus(taskData.status);
    }
  }, [taskData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      task,
      status,
      priority,
    };

    try {
      const res = await fetch(`http://localhost:8080/edit/${taskData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
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
      <Heading mb={4}>Edit Todo</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Task</FormLabel>
            <Input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task"
              isRequired
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
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </Select>
          </FormControl>
          <Button colorScheme="blue" type="submit">Update Todo</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditTodo;
