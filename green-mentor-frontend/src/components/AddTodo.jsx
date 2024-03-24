import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
import { useNavigate } from 'react-router-dom'; // Correct import

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate(); // Correct usage

  const handleSubmit = () => {
    dispatch(addTodo({ title, description }));
    navigate('/todos');
  };

  return (
    <div className='add-todo-container'>
      <h2>Add Todo</h2>
      <input type="text" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" required placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
