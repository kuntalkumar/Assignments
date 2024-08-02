import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const QuickEdit = ({ product, onSave }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      shape: product.shape,
      length: product.length,
    },
  });

  const onSubmit = (data) => {
    onSave(product.id, data);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} mt={2}>
      <Input placeholder="Shape" {...register('shape')} mb={2} />
      <Input placeholder="Length" {...register('length')} mb={2} />
      <Button type="submit">Save</Button>
    </Box>
  );
};

export default QuickEdit;
