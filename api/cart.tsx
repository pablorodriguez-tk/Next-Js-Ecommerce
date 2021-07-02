import { BASE_PATH, CART } from '../utils/constants';

export const getProductsCart = () => {
  const cart = localStorage(CART);

  if (!cart) {
    return null;
  } else {
    const products = cart.slit(',');
    return products;
  }
};
