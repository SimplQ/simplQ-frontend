import axios from 'axios';
import { store } from '../store';
import { setErrorPopupMessage } from '../store/appSlice';
import { baseURL } from '../config';

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
  // Return an empty respose on faulures. It is the callers responsibility to check if the response is empty, and take appropriate actions, if required.
  return {};
};

const makeRequest = async (request) => {
  return axios({
    baseURL,
    ...request,
  })
    .catch(handleApiErrors)
    .then((response) => response.data);
};

export default makeRequest;
