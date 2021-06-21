import { createContext } from 'react';
import { AuthProps } from '../pages/_app';

type AuthContextProps = {
  auth: AuthProps | undefined | null;
  login: (token: string) => void;
  logout: () => void;
  setReloadUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext({} as AuthContextProps);

export default AuthContext;
