import jwtDecode from 'jwt-decode';
import { MyToken } from '../pages/_app';
import { TOKEN } from '../utils/constants';

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export const hasExpiredToken = (token: string) => {
  const tokenDecode = jwtDecode<MyToken>(token);
  const expireDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true;
  } else {
    return false;
  }
};
