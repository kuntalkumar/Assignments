import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Todo from './components/Todo';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import Login from './components/Login';
import Signup from './components/Signup';
import NavigationBar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';

// Mock authentication hook (replace with actual logic)
// const useAuth = () => {
//   // Replace with actual authentication logic
//   const isAuthenticated = true; // Example: true means user is authenticated
//   return isAuthenticated;
// };

const context=createContext()
function App() {

  const [token,setToken]=useState("")
const auth=(localStorage.getItem("token"))

  return (
    <ChakraProvider>
    <context.Provider value={{setToken,token}}>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Login  />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/todo'
            element={auth!="" ? <Todo /> : <Navigate to="/" />}
          />
          <Route path='/create' element={<CreateTodo />} />
          <Route path='/edit' element={<EditTodo />} />
        </Routes>
        </context.Provider>
    </ChakraProvider>
  );
}

export default App;
export {context}
