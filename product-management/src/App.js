import React from 'react';
import { Box } from '@chakra-ui/react';
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';

const App = () => {
  return (
    <Box p={4}>
      <AddProductModal />
      <ProductList />
    </Box>
  );
};

export default App;
