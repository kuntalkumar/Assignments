import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';

const AppContext = createContext();

function App() {
  const [val, setVal] = useState([
    { task: "Create project", status: "Pending" }
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
