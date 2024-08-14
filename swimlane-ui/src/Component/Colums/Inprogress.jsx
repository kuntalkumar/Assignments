import React, { useEffect, useState } from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import styles from "./Module css/Inprogress.css"

const Inprogress = () => {
  const [arr, setArr] = useState([])
  const fetchTodos = async () => {
    try {
      let res = await fetch("http://localhost:3000/data");
      let data = await res.json();
      console.log(data);

      const pendingTasks = data.filter((task) => task.status === "progress");
      setArr(pendingTasks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn2'>
    <div id='topsection'>
    <h3>In Progress</h3>
    <FontAwesomeIcon icon={faEllipsis} />
    </div>    

 <div id='bottomsecton'>
    {arr.map((e)=>
      <SingleTodo e={e}/>

)}
{/* <button onClick={handleclick}>+  Add a card</button> */}
    </div>    </div>
  )
}

export default Inprogress