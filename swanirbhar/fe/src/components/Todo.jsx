import React, { useState, useEffect } from 'react';
import {
  Box, Button, Table, Thead, Tbody, Tr, Th, Td, Heading, useToast, useDisclosure
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import { prioritizeTasksWithAI } from './aiServices';

const Todo = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [prioritizedTasks, setPrioritizedTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isPrioritizing, setIsPrioritizing] = useState(false); // State to handle button disable
  const toast = useToast();
  const { isOpen: isCreateOpen, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();

  const fetchData = async () => {
    try {
      const res = await fetch("https://swanirbhar-be.onrender.com/task");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      console.log(data.tasks)
      if (Array.isArray(data)) { // Ensure data is an array
        setTasks(data);
        setPrioritizedTasks(data);
      } else {
        throw new Error("Data fetched is not an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error fetching tasks",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = () => {
    onOpenCreate();
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    onOpenEdit();
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://swanirbhar-be.onrender.com/delete/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setTasks(tasks.filter(task => task._id !== id));
        setPrioritizedTasks(prioritizedTasks.filter(task => task._id !== id));
        toast({
          title: "Task deleted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast({
        title: "Error deleting task",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handlePrioritize = async () => {
    setIsPrioritizing(true); // Disable button
    try {
      const updatedTasks = await prioritizeTasksWithAI(tasks);
      if (Array.isArray(updatedTasks)) { // Ensure updatedTasks is an array
        setPrioritizedTasks(updatedTasks);
        toast({
          title: "Tasks prioritized",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error("Prioritized tasks is not an array");
      }
    } catch (error) {
      console.error("Error prioritizing tasks:", error);
      toast({
        title: "Error prioritizing tasks",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsPrioritizing(false); // Re-enable button
    }
  };

  return (
    <Box maxW="900px" mx="auto" mt="10" backgroundColor={"pearl"}>
      <Box display="flex" justifyContent="space-between" mb="5">
        <Button colorScheme="blue" onClick={handleCreate} _hover={{ bg: "blue.600" }}>
          Create Todo
        </Button>
        <Button 
          colorScheme="green" 
          onClick={handlePrioritize} 
          _hover={{ bg: "green.600" }}
          isLoading={isPrioritizing} // Disable button during prioritization
        >
          Prioritize using AI
        </Button>
      </Box>
      <Box overflowX="auto">
        <Table colorScheme="blue">
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
            {Array.isArray(prioritizedTasks) && prioritizedTasks.length > 0 ? (
              prioritizedTasks.map((task, i) => (
                <Tr key={task._id}>
                  <Td>{i + 1}</Td>
                  <Td>{task.task}</Td>
                  <Td>{task.status}</Td>
                  <Td>{task.priority}</Td>
                  <Td>
                    <Button
                      colorScheme="yellow"
                      size="sm"
                      mr="2"
                      onClick={() => handleEdit(task)}
                      _hover={{ bg: "yellow.600" }}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(task._id)}
                      _hover={{ bg: "red.600" }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="5" textAlign="center">No tasks available</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>

      {/* Modals */}
      <CreateTodo onSuccess={() => fetchData()} isOpen={isCreateOpen} onClose={onCloseCreate} />
      <EditTodo task={taskToEdit} onSuccess={() => fetchData()} isOpen={isEditOpen} onClose={onCloseEdit} />
    </Box>
  );
};

export default Todo;
