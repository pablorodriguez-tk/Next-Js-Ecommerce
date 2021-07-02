import { includes, remove, size } from 'lodash';
import { toast } from 'react-toastify';
import { BASE_PATH, CART } from '../utils/constants';

export const getProductsCart = () => {
  const cart = localStorage.getItem(CART);

  if (!cart) {
    return null;
  } else {
    const products = cart.split(',');
    return products;
  }
};

export const addProductCart = (product) => {
  const cart = getProductsCart();

  if (!cart) {
    localStorage.setItem(CART, product);
    toast.success('Product added to cart');
  } else {
    const productFound = includes(cart, product);
    if (productFound) {
      toast.warning('This product is already in the cart');
    } else {
      cart.push(product);
      localStorage.setItem(CART, cart);
      toast.success('Product added to the cart');
    }
  }
};
