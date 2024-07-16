import { ADD, REDUCE } from "./actionType"

const handleAddObj=(payload)=>({
    type:ADD,
    payload:payload,
})

const handleReduceObj=(payload)=>({
    type:REDUCE,
    payload:payload
})

export{handleAddObj,handleReduceObj}