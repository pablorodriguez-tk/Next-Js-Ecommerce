import { useFormik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from 'yup';
import { resetPasswordApi, loginApi } from '../../../api/user';
import { useAuth } from '../../../hooks/useAuth';

interface LoginFormProps {
  showRegisterForm: () => void;
  onCloseModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  showRegisterForm,
  onCloseModal,
}) => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);
      if (response?.data.jwt) {
        login(response.data.jwt);
        onCloseModal();
      } else {
        toast.error('Email or password incorrect');
      }
      setLoading(false);
    },
  });

  const resetPassword = () => {
    formik.setErrors({});
    const validateEmail = Yup.string().email().required();

    if (!validateEmail.isValidSync(formik.values.identifier)) {
      formik.setErrors({ identifier: true });
    } else {
      resetPasswordApi(formik.values.identifier);
    }
  };

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Email"
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <div className="actions">
        <Button type="button" basic onClick={showRegisterForm}>
          Sign Up
        </Button>
        <div>
          <Button className="submit" type="submit" loading={loading}>
            Sign In
          </Button>
          <Button type="button" onClick={resetPassword}>
            Did you forget your password?
          </Button>
        </div>
      </div>
    </Form>
  );
};

const initialValues = () => {
  return { identifier: '', password: '' };
};
const validationSchema = () => {
  return {
    identifier: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
};

export default LoginForm;
