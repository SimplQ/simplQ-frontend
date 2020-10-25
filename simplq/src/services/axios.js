import axios from 'axios';
import getAccessToken from './auth';

const baseURL = 'http://localhost:8080/v1';

const makeRequest = async (method, url, data) => {
  const accessToken = getAccessToken();
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

export default makeRequest;
