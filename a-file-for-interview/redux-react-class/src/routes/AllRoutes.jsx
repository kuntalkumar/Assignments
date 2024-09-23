import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Read from '../components/Read'
import Create from '../components/Create'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/'  element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
    </Routes>
      
    </div>
  )
}

export default AllRoutes
