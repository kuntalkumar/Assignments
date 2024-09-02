import { useEffect, useState } from "react"


function Component() {
  const [data,setData]=useState([])
  let api="https://www.weatherapi.com/docs/conditions.json"

  async function fetcho()
  {
      let res=await fetch(api)
      let apiData=await res.json()
        setData(apiData)
  }
console.log(data)

useEffect(()=>{
    fetcho()

},[])

  return (
    <div className="Component">
      {data.map((ele)=>
      <div>
        {ele.languages[0].day_text}
      </div>
      )}
    </div>
  );
}

export default Component;
