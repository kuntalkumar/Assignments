import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateData, setUpdateData] = useState({ name: '', phoneNo: '' });
  const [state, setState] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [state]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://backendgeeksenergyyyy.onrender.com/api/users`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://backendgeeksenergyyyy.onrender.com/api/users/${selectedUser._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(updateData)
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      await response.json();
      setState(!state);
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://backendgeeksenergyyyy.onrender.com/api/users/${userId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setState(!state); // Refresh the users list after deletion
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Management</h2>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Profession</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.profession}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => setSelectedUser(user)}>
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="card mt-4">
          <div className="card-header">Edit User</div>
          <div className="card-body">
            <form onSubmit={handleUpdateSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={updateData.name}
                  onChange={handleUpdateChange}
                />
              </div>
              <div className="form-group">
                <label>Phone No</label>
                <input
                  type="text"
                  name="phoneNo"
                  className="form-control"
                  value={updateData.phoneNo}
                  onChange={handleUpdateChange}
                />
              </div>
              <button type="submit" className="btn btn-success mt-3">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary mt-3 ml-2"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
