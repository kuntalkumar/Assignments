// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter blocks..." onChange={onFilterChange} />
    </div>
  );
};

export default Filter;
