import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Select } from '@chakra-ui/react';
import { setFilters } from '../slices/productsSlice';

const FilterSort = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <Box mb={4}>
      <Select placeholder="Filter by product" name="product" onChange={handleFilterChange} mb={2}>
        <option value="Pipes">Pipes</option>
        <option value="Sheets">Sheets</option>
        {/* Add more products here */}
      </Select>
      <Select placeholder="Filter by material" name="material" onChange={handleFilterChange}>
        <option value="stainless steel">Stainless Steel</option>
        <option value="aluminium">Aluminium</option>
        {/* Add more materials here */}
      </Select>
    </Box>
  );
};

export default FilterSort;
