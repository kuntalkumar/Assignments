import { useCallback } from 'react';

const useUpdateStatus = (setTodos) => {
  return useCallback((id, newStatus) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, laneId: newStatus } : todo
      )
    );

    // Send a PATCH request to update the status on the server
    fetch(`http://localhost:3000/blocks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ laneId: newStatus }),
    }).catch((error) => console.error('Error updating status:', error));
  }, [setTodos]);
};

export default useUpdateStatus;
