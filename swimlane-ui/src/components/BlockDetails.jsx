// src/components/BlockDetails.js
import React from 'react';

const BlockDetails = ({ block }) => {
  return (
    <div className="block-details">
      <h3>{block.name}</h3>
      <p>{block.description}</p>
      <h4>History</h4>
      <ul>
        {block.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockDetails;
