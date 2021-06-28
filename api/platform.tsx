import axios from 'axios';
import { BASE_PATH } from '../utils/constants';

export const getPlatformsApi = async () => {
  try {
    axios.defaults.headers.common = {};
    const url = `${BASE_PATH}/platforms?_sort=position:asc`;
    const response = await axios.get(url);
    const data: ResponseGetPlatforms[] = response.data;
    return data;
  } catch (error) {
    return null;
  }
};

export interface ResponseGetPlatforms {
  _id: string;
  title: string;
  url: string;
  position: number;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
