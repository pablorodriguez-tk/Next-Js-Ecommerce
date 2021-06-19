import React from 'react';
import { Form, Button } from 'semantic-ui-react';

interface RegisterFormProps {
  showLoginForm: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ showLoginForm }) => {
  return (
    <Form className="login-form">
      <Form.Input name="name" type="text" placeholder="Name" />
      <Form.Input name="lastname" type="text" placeholder="Last name" />
      <Form.Input name="username" type="text" placeholder="User name" />
      <Form.Input name="email" type="text" placeholder="Email" />
      <Form.Input name="password" type="password" placeholder="Password" />
      <div className="actions">
        <Button type="button" basic>
          Log In
        </Button>
        <Button type="submit" className="submit">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
