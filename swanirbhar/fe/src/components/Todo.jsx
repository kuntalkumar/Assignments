import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditTodo from './EditTodo';

const Todo = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/task");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data); // Adjust based on your API response structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = () => {
    navigate("/create"); // Navigate to CreateTodo page
  };

  const handleEdit = (ele) => {
    navigate("/edit", { state: { ele } }); 
   
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/delete/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setTasks(tasks.filter(task => task._id !== id));
      } else {
        throw new Error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleCreate}>Create Todo</button>
      <button>Prioritize using AI</button>

      <div>
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Task</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((ele, i) => (
              <tr key={ele._id}>
                <td>{i + 1}</td>
                <td>{ele.task}</td>
                <td>{ele.status}</td>
                <td>{ele.priority}</td>
                <td>
                  <button onClick={() => handleEdit(ele)}>Edit</button>
                  <button onClick={() => handleDelete(ele._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
