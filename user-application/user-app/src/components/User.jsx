import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button, Input, Select, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Heading } from '@chakra-ui/react';

const User = () => {
  const [data, setData] = useState([]);
  const [imp, setImp] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', gender: '', salary: '' });
  const [editUser, setEditUser] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
    onOpen();
  };

  const handleDelete = async (id) => {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
    });
    fetchData();
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
      onClose();
      fetchData(); 
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
    <div style={{ margin: '20px' }}>
    <div style={{display:"flex"}}>
    <Input
        placeholder="Search by employee name"
        onChange={(e) => setImp(e.target.value)}
        style={{ marginBottom: '15px' }}
      />
      <Select
        placeholder="Filter by Gender"
        onChange={(e) => setGenderFilter(e.target.value)}
        style={{ marginBottom: '15px' }}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select
        placeholder="Sort by Salary"
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ marginBottom: '15px' }}
      >
         <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
    </div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Gender</Th>
            <Th>Salary</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {(filteredData.length ? filteredData : data)?.map((ele) => (
            <Tr key={ele.id} _hover={{ bg: '#f1f1f1' }}>
              <Td>{ele.id}</Td>
              <Td>{ele.first_name + ' ' + ele.last_name}</Td>
              <Td>{ele.email}</Td>
              <Td>{ele.gender}</Td>
              <Td>{ele.salary}</Td>
              <Td>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(ele)} style={{ cursor: 'pointer' }} />
              </Td>
              <Td>
                <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(ele.id)} style={{ cursor: 'pointer' }} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#559dbd" color="white">Edit User</ModalHeader>
          <ModalBody style={{height:"200px"}} bg="#559dbd" color="white">
            <Input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
            />
            <Input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
            />
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Input
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
            />
            <Input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default User;
