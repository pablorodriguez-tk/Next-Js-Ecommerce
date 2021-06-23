import { useFormik } from 'formik';
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { User } from '../../../interfaces/interfaces';
import * as Yup from 'yup';
import { Toast } from 'react-toastify';

interface ChangeNameFormProps {
  user: User;
}

const ChangeNameForm = ({ user }: ChangeNameFormProps) => {
  const formik = useFormik({
    initialValues: initialValues(user.name, user.lastname),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });
  return (
    <div className="change-name-form">
      <h4>Change your name and lastname</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="name"
            placeholder="Your new name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Form.Input
            name="lastname"
            placeholder="Your new lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.errors.lastname}
          />
        </Form.Group>
        <Button className="submit">Update</Button>
      </Form>
    </div>
  );
};

const initialValues = (name: string, lastname: string) => {
  return {
    name: name || '',
    lastname: lastname || '',
  };
};

const validationSchema = () => {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
  };
};

export default ChangeNameForm;
