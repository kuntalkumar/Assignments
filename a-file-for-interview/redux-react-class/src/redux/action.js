import { FETCH_DATA_REQ,FETCH_DATA_SUCCESS,FETCH_DATA_FAILED,CREATE_DATA,DELETE_DATA,EDIT_DATA } from "./actionType"

export const fetchData=async()=>{

    try {
        dispatch({ type: FETCH_ITEMS_REQUEST });
        const { data } = await axios.get('/api/items');
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_DATA_FAILED, payload: error.message });
      }
    };


export const editData=async()=>{
    try {
        const { data } = await axios.put(`/api/items/${id}`, updatedItem);
        dispatch({ type: EDIT_DATA, payload: data });
      } catch (error) {
        console.error(error);
      }
}

export const createData=async()=>{
    try {
        const { data } = await axios.post('/api/items', item);
        dispatch({ type: CREATE_DATA, payload: data });
    }catch(err){
console.log(err)
    }
}

export const DELETE_DATA=async()=>{
    try {
        await axios.delete(`/api/items/${id}`);
        dispatch({ type: DELETE_ITEM_SUCCESS, payload: id });
        
    } catch (error) {
        console.log(error)
    }
}