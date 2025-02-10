import React, { useState } from 'react'

const Todo = () => {
    const [inp, setInp]=useState("")
    const [arr , setArr]=useState([])
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        setArr([...arr,inp])
    }

    const handleDelete=(i)=>{
        console.log("deletre", i)

        setArr((arr)=>arr.filter((e,ind)=>ind!=i))
    }

    const handleEdit=()=>{

    }
  return (
    <div>
        <form action="" onSubmit={(e)=>{
            handleFormSubmit(e)
        }}>
            <input type="text" name="" id="" onChange={(e)=>{
                    setInp(e.target.value)
            }} />
            <input type="submit" name="" id="" />
        </form>  

        <br />
        <br />
        <div>
            {arr.map((e,i)=>

            <div key={i}>
                 <span>{e} </span>
                 <button onClick={()=>{
                        handleEdit(i)
                 }}>Edit</button>
                 <button onClick={()=>{
                    handleDelete(i)
                }}>Delete</button>
            </div>
            )}
        </div>  
    </div>
  )
}

export default Todo
