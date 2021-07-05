import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export const getOrdersApi = async (idUser, logout) => {
  try {
    const url = `${BASE_PATH}/orders?_sort=createdAt:desc&users_permissions_user=${idUser}`;

    const response = await authFetch(url, null, logout, 'get');
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
