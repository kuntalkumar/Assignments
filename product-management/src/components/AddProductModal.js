import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/productsSlice';
import axios from 'axios';

const AddProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState('');
  const [material, setMaterial] = useState('');
  const [grade, setGrade] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = async () => {
    const newProduct = {
      id: Date.now(),
      name: `${material} ${grade} ${product}`,
      material,
      grade,
      shape: '',
      length: '',
    };
    await axios.post('http://localhost:3000/products', newProduct);
    dispatch(addProduct(newProduct));
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add Products</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Select product" onChange={(e) => setProduct(e.target.value)}>
              <option value="Pipes">Pipes</option>
              <option value="Sheets">Sheets</option>
              {/* Add more products here */}
            </Select>
            <Select placeholder="Select material" onChange={(e) => setMaterial(e.target.value)}>
              <option value="stainless steel">Stainless Steel</option>
              <option value="aluminium">Aluminium</option>
              {/* Add more materials here */}
            </Select>
            <Select placeholder="Select grade" onChange={(e) => setGrade(e.target.value)}>
              <option value="304">304</option>
              <option value="316">316</option>
              {/* Add more grades here */}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleAddProduct}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
