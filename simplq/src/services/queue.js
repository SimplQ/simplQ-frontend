import * as axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = 'https://backend.simplq.me/v1';

const makePostRequest = async (endPoint, payload) => {
  const accessToken = await getAccessToken();
  return axios.post(BASE_URL + endPoint, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const createQueue = async (queueName) => {
  const response = await makePostRequest('/queue/create', {
    queueName: queueName,
  });
  return response.data;
};

export const readQueue = async (queueId) => {
  const response = await makePostRequest('/queue/info', {
    queueId: queueId,
  });
  return response.data;
};

export const addtoQueue = async (name, contact, notifyable, queueId) => {
  const response = await makePostRequest('/user/add', {
    name: name,
    contactNumber: contact,
    queueId: queueId,
    notifyable: notifyable,
  });
  return response.data;
};

export const userStatus = async (queueId, tokenId) => {
  const response = await makePostRequest('/user/status', {
    queueId: queueId,
    tokenId: tokenId,
  });
  return response.data;
};

export const notifyUser = async (queueId, tokenId) => {
  const response = await axios.post('/user/alert', {
    queueId: queueId,
    tokenId: tokenId,
  });
  return response;
};

export const deleteFromQueue = async (queueId, tokenId) => {
  const response = await axios.post('/user/delete', {
    queueId: queueId,
    tokenId: tokenId,
  });
  return response;
};
