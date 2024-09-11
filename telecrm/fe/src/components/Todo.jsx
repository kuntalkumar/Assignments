import React, { useContext } from 'react';
import { AppContext } from '../App';
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CreateTodo from './CreateTodo';

const Todo = () => {
  const { val, setVal } = useContext(AppContext);

  const handleEdit = (id, status) => {
    fetch(`http://localhost:8080/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: status === "Complete" ? "Pending..." : "Complete" }),
    })
    .then(response => response.json())
    .then(updatedTask => {
      const newVal = val.map(task => 
        task._id === id ? updatedTask.updatedTask : task
      );
      setVal(newVal);
    })
    .catch(error => console.error('Error updating task:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/delete/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      const newVal = val.filter(task => task._id !== id);
      setVal(newVal);
    })
    .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createTodoModal">
        Create Todo
      </button>

      {/* CreateTodo Modal */}
      <div className="modal fade" id="createTodoModal" tabIndex="-1" aria-labelledby="createTodoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createTodoModalLabel">Create New Todo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <CreateTodo />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th className='taskHead'>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {val?.map((task, i) => (
              <tr key={task._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="task-box">
                    {task.task}
                  </div>
                </td>
                <td>
                  <div className={`status-box ${task.status === "Complete" ? "complete" : ""}`}>
                    {task.status}
                  </div>
                </td>
                <td>
                  <button className="btn btn-info" onClick={() => handleEdit(task._id, task.status)}>
                    Toggle Status
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(task._id)}>
                    Delete
                  </button>
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
