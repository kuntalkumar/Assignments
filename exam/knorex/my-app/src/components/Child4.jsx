import React, { useContext } from 'react'
import {data} from "../App"
import {animal} from "./Child2"

const Child4 = () => {
const usedata=useContext(data)
const ani=useContext(animal)

  return (
    <div>
      <h1>Hi my name is - {usedata.name} and I am {usedata.age} years old</h1>
      <h3>My dog name is {ani.name} and she is {ani.age} years old</h3>

    </div>
  )
}

export default Child4
