import React, { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, Input, Select, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react';

const EditTodo = ({ task, isOpen, onClose, onSuccess }) => {
  const [taskName, setTaskName] = useState(task?.task || "");
  const [status, setStatus] = useState(task?.status || "pending");
  const [isTaskValid, setIsTaskValid] = useState(true);

  useEffect(() => {
    if (task) {
      setTaskName(task.task);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName) {
      setIsTaskValid(false);
      return;
    }

    const updatedTask = { ...task, task: taskName,status };

    try {
      const res = await fetch(`http://localhost:8080/edit/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });

      if (res.ok) {
        console.log("Task updated successfully");
        onSuccess();
        onClose();
      } else {
        console.error("Error updating task:", await res.text());
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalBody>
          <FormControl isInvalid={!isTaskValid}>
            <FormLabel>Task</FormLabel>
            <Input
              required
              type="text"
              placeholder="Enter task"
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
                setIsTaskValid(true);
              }}
              _hover={{ borderColor: "blue.500" }}
              focusBorderColor="blue.500"
            />
            {!isTaskValid && <FormErrorMessage>Task is required.</FormErrorMessage>}
          </FormControl>
          
          <FormControl mt="4">
            <FormLabel>Status</FormLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleSubmit} _hover={{ bg: "green.600" }}>
            Save
          </Button>
          <Button onClick={onClose} colorScheme="red" _hover={{ bg: "red.600" }}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTodo;
