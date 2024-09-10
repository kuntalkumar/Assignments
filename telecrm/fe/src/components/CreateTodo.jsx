import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

const CreateTodo = () => {

    const[inp,setInp]=useState("")
    
    const [data,setData]=useState([
        {task:"Create project",status:"Pending"}
    ])
    
    const {setVal}=useContext(AppContext)
const navigate=useNavigate()
        const handleSubmit=(e)=>{
            e.preventDefault();

            let newtasks={
                task:inp,
                status:"pending"
                
            }
            setData([...data,newtasks])



            navigate("/")
            
        }
        setVal(data)

        // console.log(data)

        

  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input required="true" type="text" onChange={(e)=>setInp(e.target.value) }/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateTodo
