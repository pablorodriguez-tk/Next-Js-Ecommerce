import { includes, remove, size } from 'lodash';
import { toast } from 'react-toastify';
import { BASE_PATH, CART } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export const getProductsCart = () => {
  const cart = localStorage.getItem(CART);

  if (!cart) {
    return null;
  } else {
    const products = cart.split(',');
    return products;
  }
};

export const addProductCart = (product: string) => {
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

export const countProductsCart = () => {
  const cart = getProductsCart();
  if (!cart) {
    return 0;
  } else {
    return size(cart);
  }
};

export const removeProductCart = (product) => {
  const cart = getProductsCart();
  remove(cart, (item) => {
    return item === product;
  });

  if (size(cart) > 0) {
    localStorage.setItem(CART, cart);
  } else {
    localStorage.removeItem(CART);
  }
};

export const paymentCardApi = async (
  token,
  products,
  idUser,
  address,
  logout
) => {
  try {
    const ShippingAddress = address;

    delete ShippingAddress.users_permissions_user;
    delete ShippingAddress.published_at;
    delete ShippingAddress.updatedAt;
    delete ShippingAddress.__v;
    delete ShippingAddress._id;

    const url = `${BASE_PATH}/orders`;

    const response = await authFetch(
      url,
      {
        token,
        products,
        idUser,
        ShippingAddress,
      },
      logout,
      'post'
    );
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeAllProductsCart = () => {
  localStorage.removeItem(CART);
};
