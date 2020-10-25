import makeRequest from './axios';
import * as Auth from './auth';

const MY_QUEUE_LOCALSTORAGE = 'my-local-queues';

const getMyQueuesFromLocalStorage = () => {
  const localQueues = JSON.parse(localStorage.getItem(MY_QUEUE_LOCALSTORAGE));
  return localQueues || [];
};

export const create = async (queueName) => {
  const response = await makeRequest('post', '/queue', {
    queueName,
  });
  const queue = response.data;
  if (!Auth.isLoggedIn()) {
    const existingQueues = getMyQueuesFromLocalStorage();
    existingQueues.push({ queueId: queue.queueId, queueName: queue.queueName });
    localStorage.setItem(MY_QUEUE_LOCALSTORAGE, JSON.stringify(existingQueues));
  }
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
  if (Auth.isLoggedIn()) {
    const response = await makeRequest('get', '/queues');
    return response.data.queues;
  }
  return getMyQueuesFromLocalStorage();
};
