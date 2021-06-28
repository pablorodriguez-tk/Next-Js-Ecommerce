import axios from 'axios';
import { Games } from '../interfaces/gamesInterfaces';
import { BASE_PATH } from '../utils/constants';

export const getLastGamesApi = async (limit: number) => {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=createdAt:desc`;
    const url = `${BASE_PATH}/games?${limitItems}&${sortItems}`;
    const response: Games = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getGamesPlatformApi = async (
  platform: string | string[],
  limit: number,
  start: number
) => {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=createdAt:desc`;
    const startItems = `_start=${start}`;

    const url = `${BASE_PATH}/games?platform.url=${platform}&${limitItems}&${sortItems}&${startItems}`;
    const response: Games = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
