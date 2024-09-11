import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import "./Todo.css";

const CreateTodo = () => {
  const [inp, setInp] = useState("");
  const { val, setVal } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://telecrmbe.onrender.com/addtask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: inp, status: "Pending..." }),
    })
    .then(response => response.json())
    .then(data => {
      setVal([...val, data.newTask]);
      setInp("");
      document.querySelector("#createTodoModal .btn-close").click();
    })
    .catch(error => console.error('Error creating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          required
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Todo
      </button>
    </form>
  );
};

export default CreateTodo;
