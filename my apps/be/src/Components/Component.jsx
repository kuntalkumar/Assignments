import React, { useState } from 'react'



const Component = () => {
  const [count,setCount]=useState(0)


  return (
    <div>
      <h2>Counter Application </h2>
      <h3>Count : {count}</h3>
      <button disabled={count>=10} onClick={()=>{
        setCount(count+1)
      }}>Add</button>
      <button disabled={count<=0} onClick={()=>{
        setCount(count-1)
      }}>Reduce</button>
    </div>
  )
}

export default Component
