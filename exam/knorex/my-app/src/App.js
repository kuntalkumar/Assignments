import React, { createContext } from 'react'
import Child1 from './components/Child1'


const data=createContext()
const App = () => {


const name="Kuntal"
const age=25;

const person={
  name:name,
  age:age
}
// console.log(person)
  return (
    <div>
    <data.Provider value={person}>
    <Child1/>
    </data.Provider>

    </div>
  )
}

export default App
export {data}
