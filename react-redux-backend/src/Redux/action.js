//DO NOT change the function names

import { ADD, REDUCE } from "./actionType";

//function to return the add action object
const handleAddActionObj = (payload) => ({
    type:ADD,
    payload:payload,

});

//function to return the reduce action object
const handleReduceActionObj = (payload) => ({
    type:REDUCE,
    payload:payload,

});

export { handleAddActionObj, handleReduceActionObj };