import React, { useState } from "react"

function Timer (){

    const [timer, settimer] = useState(0)
    const timerFunction=()=>{

      const intervals=  setInterval(() => {
        if(timer<=0){
            alert("Timer Value should more than 0!")
        }
            settimer((timer)=>{
                if(timer<=0){
                    clearInterval(intervals)
                    return 0
                }else{
                    return timer-1
                }
            })
        }, 1000);

    }

    return(
        <div>

        <h1>Timer : {timer}</h1>
        <input type="number" required name="" id="" onChange={(e)=>{
                settimer(e.target.value)}}/>
        <button onClick={()=>{
            timerFunction()
        }}> Start</button>
        </div>

    )
}

export default Timer;