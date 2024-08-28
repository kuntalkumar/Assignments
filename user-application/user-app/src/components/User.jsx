import React, { useEffect, useState } from 'react';

const User = () => {
  const [data, setData] = useState([]);
  const [imp, setImp] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const api = 'http://localhost:3000/data';

  const fetchData = async () => {
    let res = await fetch(api);
    let apiData = await res.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const useSearch = (data, query, genderFilter, sortOrder) => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
      let result = data;

      // Filter by gender
      if (genderFilter) {
        result = result.filter((employee) => employee.gender === genderFilter);
      }

      // Search by name
      if (query) {
        const lowerCaseQuery = query.toLowerCase();
        result = result.filter((employee) =>
          (employee.first_name + ' ' + employee.last_name).toLowerCase().includes(lowerCaseQuery)
        );
      }

      // Sort by salary
      if (sortOrder === 'asc') {
        result.sort((a, b) => a.salary - b.salary);
      } else if (sortOrder === 'desc') {
        result.sort((a, b) => b.salary - a.salary);
      }

      setFilteredData(result);
    }, [data, query, genderFilter, sortOrder]);

    return filteredData;
  };

  const filteredData = useSearch(data, imp, genderFilter, sortOrder);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by employee name"
        onChange={(e) => {
          setImp(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setGenderFilter(e.target.value);
        }}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select
        onChange={(e) => {
          setSortOrder(e.target.value);
        }}
      >
        <option value="asc">Sort by Salary: Low to High</option>
        <option value="desc">Sort by Salary: High to Low</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.first_name + ' ' + ele.last_name}</td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
              <td>{ele.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
