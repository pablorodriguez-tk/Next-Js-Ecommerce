import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { ConfigurationProps } from '../../../pages/account';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateEmailApi, updatePasswordApi } from '../../../api/user';

const ChangePasswordForm = ({ user, logout }: ConfigurationProps) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(
        user.id,
        formData.password,
        logout
      );
      if (response.confirmed !== true) {
        toast.error('Password update error');
      } else {
        console.log(response);
        toast.success('Password updated');
        formik.handleReset();
      }
      setLoading(false);
    },
  });

  return (
    <div className="change-password-form">
      <h4>Change your password</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="password"
            type="password"
            placeholder="Your new password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <Form.Input
            name="repeatPassword"
            type="password"
            placeholder="Confirm your new password"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
          />
        </Form.Group>
        <Button className="submit" type="submit" loading={loading}>
          Update
        </Button>
      </Form>
    </div>
  );
};

const initialValues = () => {
  return {
    password: '',
    repeatPassword: '',
  };
};

const validationSchema = () => {
  return {
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref('repeatPassword')], true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref('password')], true),
  };
};

export default ChangePasswordForm;
