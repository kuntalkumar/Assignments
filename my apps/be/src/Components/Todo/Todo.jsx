import React,{useState} from 'react'

const Todo = () => {
    const [ip,setIp]=useState()
    const [data,setdata]=useState([])
    
        const handleSubmit=(e)=>{
    e.preventDefault();
    let obj={
        id:Date.now(),
        todo:ip
    }
    setdata(prevData=>[...prevData,obj])
    setIp("")
        }
    console.log(data  )
  return (
    <div>
      <h1>Todo Application</h1>
      <h2>Add Todo </h2>
      <form action="" onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text"  onChange={(e)=>{
        setIp(e.target.value)
        }}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Todo
