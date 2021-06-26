import axios from 'axios';
import { getToken, hasExpiredToken } from '../api/token';

export const authFetch = async (
  url: string,
  params: any,
  logout: () => void,
  type: 'get' | 'put' | 'delete'
) => {
  const token = getToken();
  if (!token) {
    logout();
  } else {
    if (hasExpiredToken(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        if (type === 'get') {
          const response = await axios.get(url, paramsTemp);

          return response.data;
        }
        if (type === 'put') {
          const response = await axios.put(url, paramsTemp);
          return response.data;
        }
      } catch (error) {
        return error;
      }
    }
  }
};
