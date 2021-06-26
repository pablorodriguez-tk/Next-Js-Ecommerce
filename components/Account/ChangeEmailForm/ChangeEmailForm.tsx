import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { ConfigurationProps } from '../../../pages/account';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateEmailApi } from '../../../api/user';

const ChangeEmailForm = ({
  user,
  logout,
  setReloadUser,
}: ConfigurationProps) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateEmailApi(user.id, formData.email, logout);
      if (response.confirmed !== true) {
        toast.error('Email update error');
      } else {
        console.log(response);
        setReloadUser(true);
        toast.success('Email updated');
        formik.handleReset();
      }
      setLoading(false);
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
        <Button className="submit" type="submit" loading={loading}>
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
