import React, { useEffect, useState } from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import styles from "./Module css/Done.css"
const Done = () => {
  const [arr, setArr] = useState([]);
  const fetchTodos = async () => {
    try {
      let res = await fetch("http://localhost:3000/data");
      let data = await res.json();
      console.log(data);

      const pendingTasks = data.filter((task) => task.status === "done");
      setArr(pendingTasks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  // const handleclick = () => {
  //   let newObj = { task: "New Project" };
  //   setArr(prevArr => [...prevArr, newObj]);
  // };

  return (
    <div id='singleColumn4'>
       <div id='topsection' >
    <h3>Done</h3>
    <FontAwesomeIcon icon={faEllipsis} />
    </div>
    <div id='bottomsecton'>
    {arr.map((e)=>
  <SingleTodo e={e} />

)}
{/* <button id='btn' onClick={handleclick}

>+  Add a card</button> */}
    </div>    </div>
  )
}

export default Done
