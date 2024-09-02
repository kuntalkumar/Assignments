import React, { createContext } from 'react'
import Child3 from './Child3'

const animal=createContext();

const Child2 = () => {
    const obj={
        name:"princy",
        age:3,
       
    }
  return (
    <div>
    <animal.Provider value={obj}>
    <Child3/>

    </animal.Provider>
      
    </div>
  )
}

export default Child2
export {animal}