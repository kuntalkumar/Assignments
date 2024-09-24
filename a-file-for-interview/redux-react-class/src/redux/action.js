import axios from 'axios';
import { FETCH_DATA_REQ, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, CREATE_DATA, DELETE_DATA, EDIT_DATA } from "./actionType";

// Fetch Data Action
export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DATA_REQ });
    const { data } = await axios.get('https://knorex-be.onrender.com/alluser');
    // console.log("Data",data)
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILED, payload: error.message });
  }
};  

// Edit Data Action
export const editData = (id, updatedItem) => async (dispatch) => {
  try {
    const { data } = await axios.put(`https://knorex-be.onrender.com/edit/${id}`, updatedItem);
    dispatch({ type: EDIT_DATA, payload: data });
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

// Create Data Action
export const createData = (item) => async (dispatch) => {
  try {
    const { data } = await axios.post('https://knorex-be.onrender.com', item);
    dispatch({ type: CREATE_DATA, payload: data });
  } catch (err) {
    console.error("Error creating data:", err);
  }
};

// Delete Data Action
export const deleteData = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://knorex-be.onrender.com/delete/${id}`);
    dispatch({ type: DELETE_DATA, payload: id });
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
