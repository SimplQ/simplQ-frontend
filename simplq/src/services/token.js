<<<<<<< HEAD
import makeRequest from './axios';

export const create = async (name, contact, notifiable, queueId) => {
=======
import { makeRequest } from './axios';

export const create = async (name, contact, notifyable, queueId) => {
>>>>>>> upstream/master
  const response = await makeRequest('post', '/token', {
    name,
    contactNumber: contact,
    queueId,
<<<<<<< HEAD
    notifiable,
=======
    notifyable,
>>>>>>> upstream/master
  });
  return response.data;
};

export const get = async (tokenId) => {
  const response = await makeRequest('get', `/token/${tokenId}`);
  return response.data;
};

export const notify = async (tokenId) => {
  const response = await makeRequest('put', `/token/notify/${tokenId}`);
  return response;
};

export const remove = async (tokenId) => {
  const response = await makeRequest('delete', `/token/${tokenId}`);
  return response;
};
