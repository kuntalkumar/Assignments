// src/components/Swimlane.js
import React from 'react';
import { useDrop } from 'react-dnd';
import Block from './Block';

const Swimlane = ({ lane, blocks }) => {
  const [, drop] = useDrop({
    accept: 'BLOCK',
    drop: (item) => {
      // Handle block drop
    },
  });

  return (
    <div ref={drop} className="swimlane">
      <h2>{lane.name}</h2>
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

export default Swimlane;
