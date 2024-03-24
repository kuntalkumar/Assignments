import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null); // State for handling errors
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Dispatch the addTodo action and handle potential errors
      await dispatch(addTodo({ title, description }));
      navigate('/todos');
    } catch (error) {
      setError(error.message); // Set error state in case of failure
    }
  };

  return (
    <div className='add-todo-container'>
      <h2>Add Todo</h2>
      <input type="text" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" required placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
      {error && <div className="error">{error}</div>} {/* Display error message if any */}
    </div>
  );
}

export default AddTodo;
