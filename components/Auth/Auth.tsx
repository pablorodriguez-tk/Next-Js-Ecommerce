import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthProps {
  onCloseModal: () => void;
  setModalTitle: (value: 'Login' | 'Register') => void;
}

const Auth: React.FC<AuthProps> = ({ onCloseModal, setModalTitle }) => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setModalTitle('Login');
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setModalTitle('Register');
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
};

export default Auth;
