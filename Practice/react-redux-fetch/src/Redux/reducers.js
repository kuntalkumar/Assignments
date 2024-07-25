import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionType";

const initialState = {
  loading: false,
  data: [],
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
