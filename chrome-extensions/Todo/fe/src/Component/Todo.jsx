import React, { useEffect, useState } from 'react'
import "./TodoStyle.css"
const Todo = () => {

    const [data,setdata]=useState([])
    const fetchData=async()=>{
        let res= await fetch ("http://localhost:8080/?_page=1&_limit=10")
        let ApiData=await res.json();
        setdata(ApiData)
        console.log(data)
    }
    useEffect(()=>{
    fetchData()

    }, [])

  return (
    <div>
    <h1>Task Manager</h1>


    <ul >
    <div>SL No</div>
    <div>Task</div>
    <div>Status</div>
    <div>Delete</div>
    </ul>
    

     {data?.map((ele , i)=>(
        <div className='tasksList'>
    <div>{i+1}</div>
    <div>{ele.task}</div>
    <div>{ele.status}</div>
    <div>Delete</div>

    </div>
     ))} 
     <div>Add Tasks</div>
 
        
    </div>
  )
}

export default Todo
