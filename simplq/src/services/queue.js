import makeRequest from './axios';
import { store } from '../store';
import { setMyQueues } from '../store/appSlice';

export const getMyQueues = async () => {
  return makeRequest('get', '/queues');
};

export const create = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
  getMyQueues().then((subResponse) => store.dispatch(setMyQueues(subResponse.queues)));
  return response;
};

export const get = async (queueId) => {
  return makeRequest('get', `/queue/${queueId}`);
};

export const getStatus = async (queueId) => {
  return makeRequest('get', `/queue/status?queueId=${queueId}`);
};

export const getStatusByName = async (queueName) => {
  return makeRequest('get', `/queue/status?queueName=${queueName}`);
};

export const deleteQueue = async (queueId) => {
  const response = await makeRequest('delete', `/queue/${queueId}`);
  await getMyQueues().then((subResponse) => store.dispatch(setMyQueues(subResponse.myQueues)));
  return response;
};
