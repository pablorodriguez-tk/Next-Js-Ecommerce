import { size } from 'lodash';
import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export const isFavouriteApi = async (
  idUser: string | undefined,
  idGame: string,
  logout: () => void
) => {
  try {
    const url = `${BASE_PATH}/favourites?users_permissions_user=${idUser}&game=${idGame}`;
    const response = await authFetch(url, null, logout, 'get');
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addFavouriteApi = async (
  idUser: string | undefined,
  idGame: string,
  logout: () => void
) => {
  try {
    const dataFound = await isFavouriteApi(idUser, idGame, logout);
    if (size(dataFound) > 0 || !dataFound) {
      return 'You already have this game in your favorites list';
    } else {
      const url = `${BASE_PATH}/favourites`;
      const response = await authFetch(
        url,
        { users_permissions_user: idUser, game: idGame },
        logout,
        'post'
      );
      return response;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteFavouriteApi = async (
  idUser: string | undefined,
  idGame: string,
  logout: () => void
) => {
  try {
    const dataFound = await isFavouriteApi(idUser, idGame, logout);
    if (size(dataFound) > 0) {
      const url = `${BASE_PATH}/favourites/${dataFound[0]?.id}`;
      const response = await authFetch(url, null, logout, 'delete');
      return response;
    } else {
      return 'This game is not in the favorites list';
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getFavouriteApi = async (
  idUser: string | undefined,
  logout: () => void
) => {
  try {
    const url = `${BASE_PATH}/favourites?users_permissions_user=${idUser}`;
    const response = await authFetch(url, null, logout, 'get');
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
