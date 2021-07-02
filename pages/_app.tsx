import React, { useEffect, useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import { getToken, removeToken, setToken } from '../api/token';
import { useRouter } from 'next/dist/client/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CartContext from '../context/CartContext';
import { getProductsCart } from '../api/cart';

export interface AuthProps {
  token: string;
  idUser: string;
}

export interface MyToken {
  id: string;
  exp: number;
  iat: number;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [auth, setAuth] = useState<AuthProps | undefined | null>(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode<MyToken>(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  const login = (token: string) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode<MyToken>(token).id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push('/');
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  const cartData = useMemo(
    () => ({
      productsCart: 0,
      addProductCart: () => null,
      getProductCart: getProductsCart,
      removeProductCart: () => null,
      removeAllProductsCart: () => null,
    }),
    []
  );

  if (auth === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={authData}>
      <CartContext.Provider value={cartData}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};
export default MyApp;
