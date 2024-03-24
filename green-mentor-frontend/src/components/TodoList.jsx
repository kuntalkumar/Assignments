    // src/components/TodoList.js

    import React, { useEffect } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { fetchTodos, deleteTodo } from '../store/actions/todoActions';
    import { Link } from 'react-router-dom';

    function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    console.log(todos)

    return (
        <div className='todo-list-container'>
        <h2>Todo List</h2>
        <Link to="/add-todo">Add Todo</Link>
        <ul>
            {todos?.map(todo => (
            <li key={todo.id} className='todo-item'>
                <span>{todo.title}</span>
                <span>{todo.description}</span>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <Link to={`/edit-todo/${todo.id}`}>Edit</Link>
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default TodoList;
