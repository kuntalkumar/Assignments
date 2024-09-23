import React, { useEffect, useState } from 'react'

const Read = () => {


const [data,setData]=useState([])
    const fetchData=async()=>{
            let res= await fetch("https://fakestoreapi.com/products")
            let apiData=await res.json();

            setData(apiData)
            console.log(apiData)
    }
    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div>
    <h2>List of All Data</h2>
    <div>
            {data.map((ele)=>

            <div>
            <img src={ele.image} width={100} alt="" />
                <h5>{ele.title}</h5>
            </div>
            )}
    </div>
      
    </div>
  )
}

export default Read
