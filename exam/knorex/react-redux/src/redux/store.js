import{legacy_createStore} from "redux"
import countReducer from "./reducer"
const store= legacy_createStore(countReducer)
export default store