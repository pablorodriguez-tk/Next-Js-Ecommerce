import axios from 'axios';
import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

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

export const resetPasswordApi = async (email: string) => {
  console.log(email);
  try {
    const url = `${BASE_PATH}/auth/forgot-password`;
    const response = await axios.post(url, email);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMeApi = async (logout: () => void) => {
  try {
    const url = `${BASE_PATH}/users/me`;
    const response = await authFetch(url, null, logout);
    return response ? response : null;
  } catch (error) {
    return null;
  }
};
