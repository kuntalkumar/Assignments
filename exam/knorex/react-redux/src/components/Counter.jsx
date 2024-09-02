import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import increment from '../redux/action'

const Counter = () => {
    let dispatch=useDispatch()
    let ctr=useSelector(ele=>ele.count)
  return (
    <div>
          <div>Count : {ctr}</div>
          <button onClick={()=>dispatch(increment())}>add</button>
    </div>
  )
}

export default Counter
