import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EditTodo = () => {
  const [task, setTask] = useState("");        // Holds the task content
  const [priority, setPriority] = useState("");  // Holds the task priority
  const [status, setStatus] = useState("pending");   // Holds the task status
  const navigate = useNavigate();
  const location = useLocation();
  const taskData = location.state?.ele; // Retrieve task data from location state

  useEffect(() => {
    if (taskData) {
      setTask(taskData.task);      // Set initial task content
      setPriority(taskData.priority);  // Set initial task priority
      setStatus(taskData.status);    // Set initial task status
    }
  }, [taskData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      task,        // Keep the task content the same
      status,      // Updated status
      priority,    // Updated priority
    };

    try {
      const res = await fetch(`http://localhost:8080/edit/${taskData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (res.ok) {
        navigate("/");  // Redirect to the homepage on success
      } else {
        console.error("Error:", await res.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter task"
          value={task}  // Display task content (unchangeable)
          onChange={(e) => setTask(e.target.value)}
          disabled  // Disable editing task content
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select</option>

          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>

          <option value="pending">Pending</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input type="submit" value="Update Todo" />
      </form>
    </div>
  );
};

export default EditTodo;
