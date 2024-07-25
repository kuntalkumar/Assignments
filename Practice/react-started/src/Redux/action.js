import { DECREMENT, INCREMENT } from "./actionType"

export const inc=()=>({
   type: INCREMENT,
})

export const dec=()=>({
   type: DECREMENT,
})