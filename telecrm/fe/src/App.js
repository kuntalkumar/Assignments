import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import { createContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const AppContext = createContext();

function App() {
  const [val, setVal] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading true

  useEffect(() => {
    fetch('https://telecrmbe.onrender.com/task')
      .then(response => response.json())
      .then(data => {
        setVal(data);
        setLoading(false); // Data fetched, set loading to false
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setLoading(false); // In case of error, also set loading to false
      });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ val, setVal }}>
        {loading ? (
          <div className="loading">Loading...</div> 
        ) : (
          <Routes>
            <Route path='/' element={<Todo />} />
          </Routes>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
export { AppContext };
