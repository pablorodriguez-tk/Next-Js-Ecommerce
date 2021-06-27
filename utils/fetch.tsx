import axios from 'axios';
import { getToken, hasExpiredToken } from '../api/token';

export const authFetch = async (
  url: string,
  params: any,
  logout: () => void,
  type: 'get' | 'put' | 'delete' | 'post'
) => {
  const token = getToken();

  if (!token) {
    logout();
    axios.defaults.headers.common = {};
  } else {
    if (hasExpiredToken(token)) {
      logout();
      axios.defaults.headers.common = {};
    } else {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      try {
        if (type === 'get') {
          const response = await axios.get(url, params);
          return response.data;
        }
        if (type === 'put') {
          const response = await axios.put(url, params);
          return response.data;
        }
        if (type === 'post') {
          const response = await axios.post(url, params);
          return response.data;
        }
        if (type === 'delete') {
          const response = await axios.delete(url, params);
          return response.data;
        }
      } catch (error) {
        return error;
      }
    }
  }
};
