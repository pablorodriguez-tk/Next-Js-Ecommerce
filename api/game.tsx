import axios from 'axios';
import { GameList, Games } from '../interfaces/gamesInterfaces';
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

export const getTotalGamesPlatformApi = async (
  platform: string | string[] | undefined
) => {
  try {
    const url = `${BASE_PATH}/games/count?platform.url=${platform}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getGameByUrlApi = async (
  path: string | string[] | undefined
): Promise<GameList | null> => {
  try {
    const url = `${BASE_PATH}/games?url=${path}`;
    const response = await axios.get(url);
    return response.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const searchGamesApi = async (
  title: string | string[] | undefined
): Promise<GameList[] | null> => {
  try {
    const url = `${BASE_PATH}/games?_q=${title}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
