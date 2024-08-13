import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo/SingleTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styles from "./Module css/Review.css"

const Review = () => {
  const [arr, setArr] = useState([]);


  
  const fetcho= async()=>{

    let res= await fetch ("http://localhost:3000/data")
    let data= await res.json()
    console.log(data)
  setArr(data)
  }
  useEffect(() => {
    fetcho()
  
  
  }, [])
  

  const handleclick = () => {
    let newObj = { task: "New Project" };
    setArr(prevArr => [...prevArr, newObj]);
  };

  return (
    <div id='singleColumn3'>
      <div id='topsection'>
        <h3>Review</h3>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

      <div id='bottomsecton'>
        {arr.map((e, index) => (
          <SingleTodo key={index} e={e} />
        ))}
        <button onClick={handleclick}>+  Add a card</button>
      </div>
    </div>
  );
};

export default Review;
