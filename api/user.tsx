import axios from 'axios';
import { BASE_PATH } from '../utils/constants';

const registerApi = async (formData: {
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

export default registerApi;
