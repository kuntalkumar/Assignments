import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const Todo = () => {
  const navigate = useNavigate();
  const { val, setVal } = useContext(AppContext);

  const handleClick = () => {
    navigate("/create");
  };
  const handleEdit=(i)=>{

   const newVal= val.filter((ele)=> ele.status="Complete")
   setVal(newVal)

  }

  const handleDelete=(i)=>{
    const newVal=val.filter((ele,ind)=>ind!=i)
    setVal(newVal)

  }

  return (
    <div>
      <h1>ToDo App</h1>
      <button onClick={handleClick}>Create Todo</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {val && val.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.task}</td>
                <td>{ele.status}</td>
                <td>
                  <button onClick={()=>{
                    handleEdit(i)
                  }}>Toggle</button>

                  <button onClick={()=>{
                    handleDelete(i)
                  }} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
