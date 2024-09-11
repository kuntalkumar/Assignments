import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import "./Todo.css"
const CreateTodo = () => {
  const [inp, setInp] = useState("");
  const { val, setVal } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      task: inp,
      status: "Pending.."
    };

    setVal([...val, newTask]);
    setInp(""); 

    
    document.querySelector("#createTodoModal .btn-close").click();
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
