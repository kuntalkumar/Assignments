import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; // Correct import
import { updateTodo } from '../store/actions/todoActions';

function EditTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate(); // Correct usage
  const { id } = useParams();

  useEffect(() => {
    // You may want to fetch the todo item with the given id here
  }, [id]);

  const handleSubmit = () => {
    dispatch(updateTodo(id, { title, description }));
    navigate('/todos');
  };

  return (
    <div className='edit-todo-container'>
      <h2>Edit Todo</h2>
      <input type="text"   placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text"  placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button onClick={handleSubmit}>Update Todo</button>
    </div>
  );
}

export default EditTodo;
