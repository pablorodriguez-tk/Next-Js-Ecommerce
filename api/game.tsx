import axios from 'axios';
import { BASE_PATH } from '../utils/constants';

export const getLastGamesApi = async (limit: number) => {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=createdAt:desc`;
    const url = `${BASE_PATH}/games?${limitItems}&${sortItems}`;
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
