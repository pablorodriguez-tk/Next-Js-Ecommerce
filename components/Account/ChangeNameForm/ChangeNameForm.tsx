import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateNameApi } from '../../../api/user';
import { ConfigurationProps } from '../../../pages/account';

const ChangeNameForm = ({
  user,
  logout,
  setReloadUser,
}: ConfigurationProps) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(user.name, user.lastname),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateNameApi(user.id, formData, logout);
      if (!response) {
        toast.error('Update error');
      } else {
        setReloadUser(true);
        toast.success('Name and lastname updated');
      }
      setLoading(false);
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
        <Button className="submit" loading={loading}>
          Update
        </Button>
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
