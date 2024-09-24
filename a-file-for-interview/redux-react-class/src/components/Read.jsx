import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createData, editData, fetchData } from '../redux/action';

const Read = () => {
  const dispatch = useDispatch();
  const { loading, items, errors } = useSelector((state) => state);
const [isEdit,setIsEdit]=useState(false)
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

const handleEdit=(id)=>{
    dispatch(editData(id));
    setIsEdit(true)

}
const handleDelete=(id)=>{
  dispatch(editData(id));

}
const handleCreate=()=>{
  dispatch(createData());

  }

  const handleFormSubmit=(e)=>{
    e.preventDefault()

  }
  return (

    <div style={{ padding: '20px' }}>
      <h2>List of All Data</h2>
      <button onClick={()=>handleCreate()}>Create </button>

{isEdit?( <form action="" onSubmit={(e)=>handleFormSubmit(e)}>
        <input required type="text" name="name" id="" />
        <input type="submit" name="" id="" />
      </form>
):(<div>
{items?.map((ele,i)=>
        <div key={ele._id}>
          <p>{i+1} <span>{ele.email}</span></p>
          <button onClick={()=>handleEdit(ele._id)}>Edit</button>
          <button  onClick={()=>handleDelete(ele._id)}>Delete</button>
        </div>
      )}
</div>)}
     

   

     
    </div>
  );
}

export default Read;
