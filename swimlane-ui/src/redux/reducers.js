
// src/redux/reducers/swimlaneReducer.js
const initialState = {
  lanes: [],
  blocks: [],
};

const swimlaneReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action cases here
    default:
      return state;
  }
};

export default swimlaneReducer;
