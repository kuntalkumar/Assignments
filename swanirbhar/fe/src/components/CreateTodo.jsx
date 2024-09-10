import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input type="submit" value="Create Todo" />
      </form>
    </div>
  );
};

export default CreateTodo;
