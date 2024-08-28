import './App.css';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">
   <Todo/>
<hr />

   <table >
    <th>SL No</th>
    <th>Task</th>
    <th>Status</th>
    <th>Edit</th>
    <th>Delete</th>


          <tr>
          <td>1</td>
          <td> New tasks</td>
          <td> Pending</td>
          <td> Edit</td>
          <td>Delete</td>
          </tr>

   </table>
    </div>
  );
}

export default App;
