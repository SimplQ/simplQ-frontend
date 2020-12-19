import makeRequest from './axios';

export const create = async (name, contact, notifiable, queueId) => {
  return makeRequest('post', '/token', {
    name,
    contactNumber: contact,
    queueId,
    notifiable,
  });
};

export const get = async (tokenId) => {
  return makeRequest('get', `/token/${tokenId}`);
};

export const notify = async (tokenId) => {
  return makeRequest('put', `/token/notify/${tokenId}`);
};

export const remove = async (tokenId) => {
  return makeRequest('delete', `/token/${tokenId}`);
};
