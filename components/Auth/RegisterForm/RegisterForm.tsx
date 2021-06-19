import React from 'react';

interface RegisterFormProps {
  showLoginForm: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ showLoginForm }) => {
  return (
    <div>
      <h1>Register From</h1>
      <button onClick={showLoginForm}>Login</button>
    </div>
  );
};

export default RegisterForm;
