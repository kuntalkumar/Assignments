// src/components/Block.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Block = ({ block }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: { id: block.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="block" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {block.name}
    </div>
  );
};

export default Block;
