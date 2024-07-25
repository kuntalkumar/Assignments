import React, { useState } from 'react'

const Exam = () => {
    let api="https://official-joke-api.appspot.com/random_joke"
    // const [arr, setArr] = useState([])

    const fun= ()=>{
        let arr=[]
       
        for(let i=0;i<5;i++){
           let res=fetch(api)
            // let data=res.json()
           arr.push(resolve(res))
        }
        Promise.all(arr).then((ele)=>{
            console.log(ele)
        }).catch((err)=>{
            console.log(err)
        })

    }

    fun()
  return (
    <div>
      <h1>hi </h1>
    </div>
  )
}

export default Exam
