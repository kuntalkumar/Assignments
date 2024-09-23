import React, { useEffect, useState } from 'react'

const Counter = () => {


    const [count,setCount]=useState(0)

const handleClick=()=>{

}
useEffect(()=>{

    setInterval(()=>{

        setCount((p)=>p+1)
    },1000)

    return clearInterval
},[])
  return (
    <div>
    <h1>count:{count}</h1>
      <input type="number"  onChange={((e)=>{
        setCount(e.target.value)
      })}/>
      <button onClick={()=>{
        handleClick("start")
      }}>Start</button>
      <button onClick={()=>{
        handleClick("reset")
      }}>Reset</button>
    </div>
  )
}

export default Counter
