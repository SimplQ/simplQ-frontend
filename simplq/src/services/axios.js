import axios from 'axios';
import { getAccessToken } from './auth';

const baseURL = 'https://devbackend.simplq.me/v1';

<<<<<<< HEAD
const makeRequest = async (method, url, data) => {
=======
export const makeRequest = async (method, url, data) => {
>>>>>>> upstream/master
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
<<<<<<< HEAD

export default makeRequest;
=======
>>>>>>> upstream/master
