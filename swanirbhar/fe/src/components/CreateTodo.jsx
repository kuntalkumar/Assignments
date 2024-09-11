import React, { useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, Input, Select, useDisclosure, FormControl, FormLabel, FormErrorMessage
} from '@chakra-ui/react';

const CreateTodo = ({ isOpen, onClose, onSuccess }) => {
  const [task, setTask] = useState("");
  const [isTaskValid, setIsTaskValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) {
      setIsTaskValid(false);
      return;
    }

    const newTask = { task, status: "pending" };

    try {
      const res = await fetch("http://localhost:8080/addtask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (res.ok) {
        onSuccess();
        onClose();
      } else {
        console.error("Error:", await res.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Todo</ModalHeader>
        <ModalBody>
          <FormControl isInvalid={!isTaskValid}>
            <FormLabel>Task</FormLabel>
            <Input
              required
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
                setIsTaskValid(true);
              }}
              _hover={{ borderColor: "blue.500" }}
              focusBorderColor="blue.500"
            />
            {!isTaskValid && <FormErrorMessage>Task is required.</FormErrorMessage>}
          </FormControl>
          
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleSubmit} _hover={{ bg: "green.600" }}>
            Create
          </Button>
          <Button onClick={onClose} colorScheme="red" _hover={{ bg: "red.600" }}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTodo;
