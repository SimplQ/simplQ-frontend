import makeRequest from './axios';

export const create = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
  return response.data;
};

export const get = async (queueId) => {
  const response = await makeRequest('get', '/queue/' + queueId);
  return response.data;
};
