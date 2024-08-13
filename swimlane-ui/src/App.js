import React, { useState } from 'react'
// import Assignment from './Component/Assignment'
// import Loading from './Component/Loading/Loading'
import { DndProvider } from 'react-dnd';
import { ChakraProvider } from '@chakra-ui/react';

import { HTML5Backend } from 'react-dnd-html5-backend';
import Loading from './Component/Loading/Loading';
import Assignment from './Component/Assignment';
import theme from './Theme';
const App = () => {

  const [loading,setLoading]=useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  return (
    <ChakraProvider theme={theme}>

    <DndProvider backend={HTML5Backend}>

{
  loading?      <Loading/>:      <Assignment/>


}

    </DndProvider>
    </ChakraProvider>

  )
}

export default App
