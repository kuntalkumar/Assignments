import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, Flex } from '@chakra-ui/react';

const Todo = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/task");
            if (!response.ok) throw new Error("Failed to fetch tasks");
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            setError("Error fetching tasks");
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCreate = () => {
        navigate("/create");
    };

    const handleEdit = (ele) => {
        navigate("/edit", { state: { ele } });
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/delete/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setTasks(tasks.filter(task => task._id !== id));
            } else {
                throw new Error("Failed to delete task");
            }
        } catch (error) {
            setError("Error deleting task");
            console.error("Error deleting task:", error);
        }
      }
        
        
        const handlePrioritize = async () => {
          try {
              const response = await axios.post('http://localhost:8080/prioritize-tasks', { tasks });
              if (!response.ok) throw new Error('Failed to prioritize tasks');
              const priorities = await response.json();
      
              // Update tasks with priorities
              const prioritizedTasks = tasks.map((task) => ({
                  ...task,
                  priority: priorities.find((p) => p.task === task.task)?.priority || task.priority,
              }));
              setTasks(prioritizedTasks);
          } catch (error) {
              setError('Error prioritizing tasks');
              console.error('Error prioritizing tasks:', error);
          } finally {
              setLoading(false);
          }
      };
      
      return (
          <Box p={5}>
              <Flex justifyContent={'end'} mb={4}>
                  <Button colorScheme="green" onClick={handlePrioritize} isLoading={loading}>
                      Prioritize using AI
                  </Button>
              </Flex>
              {error && <Box color="red.500" mb={4}>{error}</Box>}
              <Table variant="simple">
                  <Thead>
                      <Tr>
                          <Th>SL No</Th>
                          <Th>Task</Th>
                          <Th>Status</Th>
                          <Th>Priority</Th>
                          <Th>Actions</Th>
                      </Tr>
                  </Thead>
                  <Tbody>
                      {tasks.map((ele, i) => (
                          <Tr key={ele._id}>
                              <Td>{i + 1}</Td>
                              <Td>{ele.task}</Td>
                              <Td>{ele.status}</Td>
                              <Td>{ele.priority}</Td>
                              <Td>
                                  <Button colorScheme="yellow" onClick={() => handleEdit(ele)}>Edit</Button>
                                  <Button colorScheme="red" ml={2} onClick={() => handleDelete(ele._id)}>Delete</Button>
                              </Td>
                          </Tr>
                      ))}
                  </Tbody>
              </Table>
          </Box>
      );
      };
      
      export default Todo;