import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { ConfigurationProps } from '../../../pages/account';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toast } from 'react-toastify';

const ChangeEmailForm = ({
  user,
  logout,
  setReloadUser,
}: ConfigurationProps) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <div className="change-email-form">
      <h4>
        Change your email <span>(Your actual email is: {user.email})</span>
      </h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="email"
            placeholder="Your new email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Form.Input
            name="repeatEmail"
            placeholder="Confirm your new email"
            onChange={formik.handleChange}
            value={formik.values.repeatEmail}
            error={formik.errors.repeatEmail}
          />
        </Form.Group>
        <Button className="submit" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

const initialValues = () => {
  return {
    email: '',
    repeatEmail: '',
  };
};

const validationSchema = () => {
  return {
    email: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref('repeatEmail')], true),
    repeatEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref('email')], true),
  };
};

export default ChangeEmailForm;
