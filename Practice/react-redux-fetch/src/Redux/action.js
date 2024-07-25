import {  FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionType";
import axios from "axios"

export const fetchData=()=>{
    return async (dispatch)=>{
        dispatch({type:FETCH_DATA_REQUEST});

    //     try 
    //     {
    //         const response = await axios.get('https://fakestoreapi.com/products')
    //   dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    
            
    //     } 
    //     catch (error) 
    //     {
    //         dispatch({ type: FETCH_DATA_FAILURE, error });

    //      }

    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
}).catch((err)=>{
               dispatch({ type: FETCH_DATA_FAILURE, err });

})



    }
}
