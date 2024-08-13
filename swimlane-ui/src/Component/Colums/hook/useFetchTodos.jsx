import { useEffect, useState } from 'react';

const useFetchTodos = (status) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('http://localhost:3000/data');
        const data = await res.json();
        setTodos(data?.filter(task => task.status === status));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [status]);

  return [todos, setTodos];
};

export default useFetchTodos;
