import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import { createContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const AppContext = createContext();

function App() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/task')
      .then(response => response.json())
      .then(data => setVal(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

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
