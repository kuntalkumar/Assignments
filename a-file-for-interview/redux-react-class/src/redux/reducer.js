import { FETCH_DATA_FAILED, FETCH_DATA_REQ, FETCH_DATA_SUCCESS, CREATE_DATA, EDIT_DATA, DELETE_DATA } from "./actionType";

// Define the initial state
const initialState = {
  items: [],
  loading: false,
  errors: null
};

export const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_DATA_REQ:
      return {
        ...state,
        loading: true,
        errors: null // Clear errors when fetching starts
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload, // Update state with fetched items
        errors: null // Clear errors on successful fetch
      };

    case FETCH_DATA_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload // Store the error
      };

    case CREATE_DATA:
      return {
        ...state,
        items: [...state.items, action.payload] // Add new item
      };

    case EDIT_DATA:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ), // Edit item in the list
      };

    case DELETE_DATA:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload), // Remove item from the list
      };

    default:
      return state;
  }
};
