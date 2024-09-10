import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

const Todo = () => {

   
const navigate=useNavigate()
    const handleClick=()=>{
            navigate("/create")
    }
const {val}=useContext(AppContext)
console.log(val)


  return (
    <div>
    <div>

      <h1>ToDo App </h1>
      <button onClick={()=>handleClick()}>Create Todo</button>
    </div>
      <div>
      <table>
        <thead>
          <th>SL No</th>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
          
        </thead>
        <tbody>
          {val?.map((ele,i)=>{
            <tr>
            <td>{i+1}</td>
            <td>{ele.task}</td>
            <td>{ele.status}</td>
            <td>
              <button>EDIT</button>
              <button>Delete</button>
            </td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Todo
