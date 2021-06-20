import axios from 'axios';
import { BASE_PATH } from '../utils/constants';

interface registerApiProps {
  formData: {};
}

const registerApi = async (formData: registerApiProps) => {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
    const response = await axios.post(url, formData);
    console.log(response);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default registerApi;
