export const getMyQueues = () => ({ method: 'get', url: '/queues' });

export const create = (queueName) => ({ method: 'post', url: '/queue', data: { queueName } });

export const get = (queueId) => ({ method: 'get', url: `/queue/${queueId}` });

export const getStatus = (queueId) => ({ method: 'get', url: `/queue/status?queueId=${queueId}` });

export const getStatusByName = (queueName) => ({
  method: 'get',
  url: `/queue/status?queueName=${queueName}`,
});

export const deleteQueue = (queueId) => ({ method: 'delete', url: `/queue/${queueId}` });
