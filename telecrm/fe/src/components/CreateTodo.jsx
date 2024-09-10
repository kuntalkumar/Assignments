// import React, { useState, useContext } from 'react';
// import { AppContext } from '../App';

// const CreateTodo = ({ closeModal }) => {
//   const [inp, setInp] = useState("");
//   const { val, setVal } = useContext(AppContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newTask = {
//       task: inp,
//       status: "Pending"
//     };

//     setVal([...val, newTask]);  // Update the context with the new task
//     closeModal();  // Close the modal
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <input
//           required
//           type="text"
//           className="form-control"
//           placeholder="Enter task"
//           value={inp}
//           onChange={(e) => setInp(e.target.value)}
//         />
//       </div>
//       <input type="submit" className="btn btn-success" value="Create Todo" />
//     </form>
//   );
// };

// export default CreateTodo;
