import { addNum } from "./actionType"
const initialState={
    count:0
}

const countReducer=(state=initialState,action)=>{
    switch(action.type){

        case addNum:
            return{
                ...state, count:state.count+1
            }

        default: return state

    }
}

export default countReducer;