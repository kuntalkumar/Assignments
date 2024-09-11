import React, { useContext } from 'react';
import { AppContext } from '../App';
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CreateTodo from './CreateTodo';

const Todo = () => {
  const { val, setVal } = useContext(AppContext);

  const handleEdit = (i) => {
    const newVal = val.map((ele, ind) =>
      ind === i ? { ...ele, status: ele.status === "Complete" ? "Pending..." : "Complete" } : ele
    );
    setVal(newVal);
  };

  const handleDelete = (i) => {
    const newVal = val.filter((ele, ind) => ind !== i);
    setVal(newVal);
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
        <table >
          <thead>
 
              <th>SL No</th>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
        
          </thead>
          <tbody>
            {val?.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div className="task-box">
                    {ele.task}
                  </div>
                </td>
                <td>
                  <div className={`status-box ${ele.status === "Complete" ? "complete" : ""}`}>
                    {ele.status}
                  </div>
                </td>
                <td>
                  <button className="btn btn-info me-2" onClick={() => handleEdit(i)}>
                    Toggle Status
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(i)}>
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
