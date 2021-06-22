import axios from 'axios';
import { getToken, hasExpiredToken } from '../api/token';

export const authFetch = async (
  url: string,
  params: any,
  logout: () => void
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
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(url, paramsTemp);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  }
};
