export const getMyQueues = () => {
  return { method: 'get', url: '/queues' };
};

export const create = (queueName) => ({ method: 'post', url: '/queue', data: { queueName } });

export const get = (queueId) => {
  return { method: 'get', url: `/queue/${queueId}` };
};

export const getStatus = (queueId) => {
  return { method: 'get', url: `/queue/status?queueId=${queueId}` };
};

export const getStatusByName = (queueName) => {
  return { method: 'get', url: `/queue/status?queueName=${queueName}` };
};

export const deleteQueue = (queueId) => {
  return { method: 'delete', url: `/queue/${queueId}` };
};
