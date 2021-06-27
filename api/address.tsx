import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';
import { AddressProps } from '../components/Account/AddressForm/AddressForm';
import { AddressResponse, User } from '../interfaces/interfaces';

export const createAddressApi = async (
  address: AddressProps,
  logout: () => void,
  idUser: string
) => {
  try {
    const url = `${BASE_PATH}/addresses?users_permissions_user=${idUser}`;
    const response = await authFetch(url, address, logout, 'post');
    return response ? response : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAddressesApi = async (idUser: string, logout: () => void) => {
  try {
    const url = `${BASE_PATH}/addresses?users_permissions_user=${idUser}`;
    const response: AddressResponse[] = await authFetch(
      url,
      null,
      logout,
      'get'
    );
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const DeleteAddressesApi = async (
  idAddress: string,
  logout: () => void
) => {
  try {
    const url = `${BASE_PATH}/addresses/${idAddress}`;
    const response = await authFetch(url, null, logout, 'delete');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
