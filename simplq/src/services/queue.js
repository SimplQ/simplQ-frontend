<<<<<<< HEAD
import makeRequest from './axios';
=======
import { makeRequest } from './axios';
>>>>>>> upstream/master

export const create = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
<<<<<<< HEAD
  return response.data;
};

export const get = async (queueId) => {
  const response = await makeRequest('get', `/queue/${queueId}`);
  return response.data;
};

export const getStatus = async (queueId) => {
  const response = await makeRequest('get', `/queue/status?queueId=${queueId}`);
  return response.data;
};

export const getStatusByName = async (queueName) => {
  const response = await makeRequest('get', `/queue/status?queueName=${queueName}`);
  return response.data;
};
=======
  return response.data;
};

export const get = async (queueId) => {
  const response = await makeRequest('get', `/queue/${queueId}`);
  return response.data;
};
>>>>>>> upstream/master
