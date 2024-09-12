import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Button, Input, FormControl, FormErrorMessage } from '@chakra-ui/react';
import * as Yup from 'yup';

const AuthForm = ({ onSubmit, isRegister }) => {
  const validationSchema = Yup.object({
    name: isRegister ? Yup.string().required('Name is required') : null,
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          {isRegister && (
            <FormControl isInvalid={errors.name && touched.name}>
              <Field name="name">
                {({ field }) => <Input {...field} placeholder="Name" />}
              </Field>
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          )}
          <FormControl isInvalid={errors.email && touched.email} mt={4}>
            <Field name="email">
              {({ field }) => <Input {...field} placeholder="Email" />}
            </Field>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password && touched.password} mt={4}>
            <Field name="password">
              {({ field }) => <Input {...field} type="password" placeholder="Password" />}
            </Field>
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            {isRegister ? 'Register' : 'Login'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
