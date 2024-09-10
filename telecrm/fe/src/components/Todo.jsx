import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import CreateTodo from './CreateTodo';
import { Button, Modal, Table, Container } from 'react-bootstrap';
import './Todo.css'; // Custom CSS for additional styling

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
    <Container className="mt-4">
      <h1 className="mb-4 text-center" style={{ color: '#007bff' }}>Todo App</h1>
      <Button variant="primary" className="mb-3" onClick={openModal}>Create Todo</Button>

      <Table striped bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {val?.map((ele, i) => (
            <tr key={i} className={ele.status === "Complete" ? 'table-success' : 'table-warning'}>
              <td>{i + 1}</td>
              <td>{ele.task}</td>
              <td>{ele.status}</td>
              <td>
                <Button 
                  variant={ele.status === "Complete" ? "danger" : "success"} 
                  size="sm" 
                  className="me-2"
                  onClick={() => handleEdit(i)}
                >
                  {ele.status === "Complete" ? "Undo" : "Complete"}
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(i)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for CreateTodo */}
      <Modal show={showModal} onHide={closeModal} dialogClassName="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>Create New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTodo closeModal={closeModal} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Todo;
