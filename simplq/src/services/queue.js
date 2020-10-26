import makeRequest from './axios';
import { store } from '../store';
import { addToMyQueues } from '../store/appSlice';

export const create = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
  const queue = response.data;
  store.dispatch(addToMyQueues({ queueId: queue.queueId, queueName: queue.queueName }));
  return queue;
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

export const getMyQueues = async () => {
    const response = await makeRequest('get', '/queues');
    return response.data.queues;
};
