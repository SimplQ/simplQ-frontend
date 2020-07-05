import axios from 'axios';
import { getAccessToken } from './auth';

const baseURL = 'https://devbackend.simplq.me/v1';

export default async (method, url, data) => {
  const accessToken = await getAccessToken();
  return axios({
    method,
    baseURL,
    url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data,
  });
};
