import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Button, Input, FormControl, FormErrorMessage } from '@chakra-ui/react';
import * as Yup from 'yup';

const AssignmentForm = ({ onSubmit, initialValues = { title: '', description: '', student: '', teacher: '' } }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    student: Yup.string().required('Student ID is required'),
    teacher: Yup.string().required('Teacher ID is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <FormControl isInvalid={errors.title && touched.title}>
            <Field name="title">
              {({ field }) => <Input {...field} placeholder="Title" />}
            </Field>
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description && touched.description} mt={4}>
            <Field name="description">
              {({ field }) => <Input {...field} placeholder="Description" />}
            </Field>
            <FormErrorMessage>{errors.description}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.student && touched.student} mt={4}>
            <Field name="student">
              {({ field }) => <Input {...field} placeholder="Student ID" />}
            </Field>
            <FormErrorMessage>{errors.student}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.teacher && touched.teacher} mt={4}>
            <Field name="teacher">
              {({ field }) => <Input {...field} placeholder="Teacher ID" />}
            </Field>
            <FormErrorMessage>{errors.teacher}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Save Assignment
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AssignmentForm;
