import makeRequest from './axios';
import { store } from '../store';
import { setMyQueues } from '../store/appSlice';

export const getMyQueues = async () => {
  const response = await makeRequest('get', '/queues');
  return response.data.queues;
};

export const create = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
  getMyQueues().then((queues) => store.dispatch(setMyQueues(queues)));
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

export const deleteQueue = async (queueId) => {
  const response = await makeRequest('delete', `/queue/${queueId}`);
  await getMyQueues().then((myQueues) => store.dispatch(setMyQueues(myQueues)));
  return response.data;
};
