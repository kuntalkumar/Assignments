import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Todo</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/create' element={<CreateTodo />} />
        <Route path='/edit' element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
