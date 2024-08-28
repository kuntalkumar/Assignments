import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const User = () => {
  const [data, setData] = useState([]);
  const [imp, setImp] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', gender: '', salary: '' });

  const api = 'http://localhost:3000/data';

  const fetchData = async () => {
    let res = await fetch(api);
    let apiData = await res.json();
    setData(apiData);
    setFilteredData(apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const useSearch = (data, query, genderFilter, sortOrder) => {
    useEffect(() => {
      let result = data;

      if (genderFilter) {
        result = result.filter((employee) => employee.gender === genderFilter);
      }

      if (query) {
        const lowerCaseQuery = query.toLowerCase();
        result = result.filter((employee) =>
          (employee.first_name + ' ' + employee.last_name).toLowerCase().includes(lowerCaseQuery)
        );
      }

      if (sortOrder === 'asc') {
        result.sort((a, b) => a.salary - b.salary);
      } else if (sortOrder === 'desc') {
        result.sort((a, b) => b.salary - a.salary);
      }

      setFilteredData(result);
    }, [data, query, genderFilter, sortOrder]);
  };

  useSearch(data, imp, genderFilter, sortOrder);

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gender: user.gender,
      salary: user.salary
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
    });
    fetchData(); // Refresh the data after deletion
  };

  const handleSave = async () => {
    if (editUser) {
      await fetch(`${api}/${editUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setEditUser(null);
      setIsEditing(false);
      fetchData(); // Refresh the data after editing
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by employee name"
        onChange={(e) => setImp(e.target.value)}
      />
      <select
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by Salary</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {(filteredData.length ? filteredData : data)?.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.first_name + ' ' + ele.last_name}</td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
              <td>{ele.salary}</td>
              <td>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(ele)} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(ele.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div>
          <h3>Edit User</h3>
          <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
          />
          <input
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default User;
