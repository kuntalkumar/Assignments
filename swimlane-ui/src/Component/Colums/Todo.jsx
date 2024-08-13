import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo/SingleTodo";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Module css/Todo.css"; // Ensure this is the correct path

const Todo = () => {
  const [arr, setArr] = useState([]);

  const fetchTodos = async () => {
    try {
      let res = await fetch("http://localhost:3000/data");
      let data = await res.json();
      console.log(data);

      const pendingTasks = data.filter((task) => task.status === "pending");
      setArr(pendingTasks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleClick = () => {
    let newObj = { task: "New Project" };
    setArr((prevArr) => [...prevArr, newObj]);
  };

  return (
    <div id="singleColumn1" className={styles.singleColumn1}>
      <div id="topsection" className={styles.topSection}>
        <h3>Todo</h3>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div id="bottomsection" className={styles.bottomSection}>
        {arr?.map((e, index) => (
          <SingleTodo key={index} e={e} />
        ))}
        <button onClick={handleClick}> + Add a card</button>
      </div>
    </div>
  );
};

export default Todo;
