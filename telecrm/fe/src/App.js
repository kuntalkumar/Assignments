import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';
import { createContext, useState } from 'react';

const AppContext = createContext();

function App() {
  const [val, setVal] = useState([
    { task: "Create project", status: "Pending" },
    { task: "Create HTML", status: "Pending" },
    { task: "Put CSS", status: "Pending" },
    { task: "Add Javascript", status: "Pending" }
  ]);
  return (
    <div className="App">
      <AppContext.Provider value={{ val, setVal }}>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/create' element={<CreateTodo />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };