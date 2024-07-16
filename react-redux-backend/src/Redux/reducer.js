//Complete the reducer function logic inside the curly braces {}

const initialState={
    counter:0,

}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD':
        return { ...state, counter: state.counter + action.payload };
        case 'REDUCE':
          return { ...state, counter: state.counter - action.payload };
        default:
          return state;

    }

};


export { reducer };





// reducer.js
// const initialState = {
//     counter: 0,
//   };
  
//   const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state, counter: state.counter + 1 };
//       case 'DECREMENT':
//         return { ...state, counter: state.counter - 1 };
//       default:
//         return state;
//     }
//   };
  
  // export default counterReducer;
  