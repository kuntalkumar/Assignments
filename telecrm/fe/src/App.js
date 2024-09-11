import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const AppContext = createContext();

function App() {
  const [val, setVal] = useState([
    { task: "Create project", status: "Pending..." },
    { task: "Create HTML", status: "Pending..." },
    { task: "Put CSS Style", status: "Pending..." },
    { task: "Add Javascript", status: "Pending..." },
    { task: "Ready  Deploy", status: "Pending..." }
  ]);

  return (
    <div className="App">
      <AppContext.Provider value={{ val, setVal }}>
        <Routes>
          <Route path='/' element={<Todo />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
