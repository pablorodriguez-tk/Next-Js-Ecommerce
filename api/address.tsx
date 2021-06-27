import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';
import { AddressProps } from '../components/Account/AddressForm/AddressForm';

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
