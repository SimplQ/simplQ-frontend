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
    queueName,
  });
  return response.data;
};

export const readQueue = async (queueId) => {
  const response = await makePostRequest('/queue/info', {
    queueId,
  });
  return response.data;
};

export const addtoQueue = async (name, contact, notifyable, queueId) => {
  const response = await makePostRequest('/user/add', {
    name,
    contactNumber: contact,
    queueId,
    notifyable,
  });
  return response.data;
};

export const userStatus = async (queueId, tokenId) => {
  const response = await makePostRequest('/user/status', {
    queueId,
    tokenId,
  });
  return response.data;
};

export const notifyUser = async (queueId, tokenId) => {
  const response = await makePostRequest('/user/alert', {
    queueId,
    tokenId,
  });
  return response;
};

export const deleteFromQueue = async (queueId, tokenId) => {
  const response = await makePostRequest('/user/delete', {
    queueId,
    tokenId,
  });
  return response;
};
