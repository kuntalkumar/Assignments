import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const [inp, setInp] = useState("");
  const { val, setVal } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      task: inp,
      status: "Pending"
    };

    setVal([...val, newTask]);  // Update the context with the new task
    navigate("/");  // Navigate back to the Todo list
  };

  return (
    <div>
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <input type="submit" value="Create Todo" />
      </form>
    </div>
  );
};

export default CreateTodo;
