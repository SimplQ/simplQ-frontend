// Get metadata for all queues creaetd by the current user
export const getMyQueues = () => ({ method: 'get', url: '/queues' });

// Create a new queue
export const create = (queueName) => ({ method: 'post', url: '/queue', data: { queueName } });

// Get a queue by id. Returns all active tokens in the queue
export const get = (queueId) => ({ method: 'get', url: `/queue/${queueId}` });

// Return public stats for the queue, like number of people currently in the queue etc.
// This endpoint can be envoked by non-owners as well.
export const getStatus = (queueId) => ({ method: 'get', url: `/queue/status?queueId=${queueId}` });

// Same as getStatus, but fetch by name instead of ID.
export const getStatusByName = (queueName) => ({
  method: 'get',
  url: `/queue/status?queueName=${queueName}`,
});

// Delete a queue by ID
export const deleteQueue = (queueId) => ({ method: 'delete', url: `/queue/${queueId}` });
