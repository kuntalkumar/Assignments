import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { fetchProducts, updateProduct } from '../slices/productsSlice';
import QuickEdit from './QuickEdit';
import FilterSort from './FilterSort';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const filters = useSelector((state) => state.products.filters);
  const dispatch = useDispatch();
  const [editingProductId, setEditingProductId] = React.useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    return (
      (filters.product ? product.name.includes(filters.product) : true) &&
      (filters.material ? product.material.includes(filters.material) : true)
    );
  });

  const handleQuickEdit = (id, updates) => {
    dispatch(updateProduct({ id, updates }));
    setEditingProductId(null);
  };

  return (
    <Box>
      <FilterSort />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Material</Th>
            <Th>Grade</Th>
            <Th>Shape</Th>
            <Th>Length</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredProducts.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.material}</Td>
              <Td>{product.grade}</Td>
              <Td>{product.shape}</Td>
              <Td>{product.length}</Td>
              <Td>
                <Button size="sm" onClick={() => setEditingProductId(product.id)}>
                  Quick Edit
                </Button>
                {editingProductId === product.id && (
                  <QuickEdit product={product} onSave={handleQuickEdit} />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductList;
