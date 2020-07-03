

import { makeRequest } from './axios'

export const createQueue = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
  return response.data;
};

export const readQueue = async (queueId) => {
  const response = await makeRequest('get', '/queue/' + queueId);
  return response.data;
};

