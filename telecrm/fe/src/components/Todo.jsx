import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import CreateTodo from './CreateTodo';

const Todo = () => {
  const { val, setVal } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (i) => {
    const newVal = val.map((ele, ind) => 
      ind === i ? { ...ele, status: ele.status === "Complete" ? "Pending" : "Complete" } : ele
    );
    setVal(newVal);
  };

  const handleDelete = (i) => {
    const newVal = val.filter((ele, ind) => ind !== i);
    setVal(newVal);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">ToDo App</h1>
      <button className="btn btn-primary mb-3" onClick={openModal}>Create Todo</button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {val.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.task}</td>
                <td>{ele.status}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(i)}>Toggle</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for CreateTodo */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" aria-labelledby="createTodoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createTodoModalLabel">Create New Todo</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <CreateTodo closeModal={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
