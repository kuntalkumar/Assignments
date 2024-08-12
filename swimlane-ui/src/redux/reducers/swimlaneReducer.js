// src/redux/reducers/swimlaneReducer.js
const swimlaneReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MOVE_BLOCK':
        return {
          ...state,
          blocks: state.blocks.map((block) =>
            block.id === action.payload.blockId
              ? { ...block, laneId: action.payload.newLaneId, history: [...block.history, `Moved to ${action.payload.newLaneId}`] }
              : block
          ),
        };
      default:
        return state;
    }
  };
  