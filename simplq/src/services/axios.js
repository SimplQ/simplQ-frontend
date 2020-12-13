import axios from 'axios';
import { store } from '../store';
import { setErrorPopupMessage } from '../store/appSlice';
import getAccessToken from './auth';

const baseURL = 'https://devbackend.simplq.me/v1';

const handleApiErrors = (err) => {
  if (!err.response) {
    store.dispatch(setErrorPopupMessage('You are offline. Please reconnect to the internet'));
  } else if (err.response.status === 422) {
    store.dispatch(
      setErrorPopupMessage(
        `There's a problem with the data you've entered ${err.response.data.message}`
      )
    );
  } else {
    store.dispatch(setErrorPopupMessage('An error occured. Please try again'));
  }
  return {};
};

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
  }).catch(handleApiErrors);
};

export default makeRequest;
