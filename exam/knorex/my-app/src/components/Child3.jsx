import React, { useContext } from 'react'
import Child4 from './Child4'
import {animal} from "./Child2"


const Child3 = () => {
    const ani=useContext(animal)
  return (
    <div>
      <Child4/>

      <h1>My dog name is {ani.name} and she is {ani.age} years old</h1>
    </div>
  )
}

export default Child3
