import React, { useRef, useState } from 'react'

const Counter = () => {
    const [feq,seFreq]=useState(false)
    const countRef = useRef(0)
    console.log(countRef.current)

  return (
    <div>
              <h3>count :{countRef.current} </h3>
              <button onClick={()=>{
                countRef.current+=1;
                // seFreq(!feq)


              }}> ADD</button>

    </div>
  )
}

export default Counter
