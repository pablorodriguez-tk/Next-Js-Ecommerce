import React from 'react';

interface LoginFormProps {
  showRegisterForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ showRegisterForm }) => {
  return (
    <div>
      <h1>Login Form</h1>
      <button onClick={showRegisterForm}>Go to register</button>
    </div>
  );
};

export default LoginForm;
