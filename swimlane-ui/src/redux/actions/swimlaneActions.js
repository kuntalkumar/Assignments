// src/redux/actions/swimlaneActions.js
export const moveBlock = (blockId, newLaneId) => ({
    type: 'MOVE_BLOCK',
    payload: { blockId, newLaneId },
  });
  