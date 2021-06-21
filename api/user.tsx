import axios from 'axios';
import { BASE_PATH } from '../utils/constants';

export const registerApi = async (formData: {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
    const response = await axios.post(url, formData);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginApi = async (formData: {
  identifier: string;
  password: string;
}) => {
  try {
    const url = `${BASE_PATH}/auth/local`;
    const response = await axios.post(url, formData);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
