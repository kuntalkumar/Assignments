import React, { useEffect, useRef, useState } from 'react'
import Counter from './Counter'

const App = () => {


  const [count, setCount]=useState(5)



  useEffect(()=>{
    if(count==5){
      setInterval(()=>{
        setCount(c=>c-1)
          },5000)
    }
   

  },[count])
 


  return (
    <div>
    <h1>counter app</h1>
    <h3>count - {count}</h3>

    </div>
  )
}

export default App
