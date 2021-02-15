/**
 * Get metadata for all queues created by the current user
 *
 * @returns {Object} request - partial axios request without baseURL
 */
export const getUserQueues = () => ({ method: 'get', url: '/queues' });

/**
 * Create a new queue
 *
 * @param {string} queueName
 * @returns {Object} request - partial axios request without baseURL
 */
export const createQueue = (queueName) => ({ method: 'post', url: '/queue', data: { queueName } });

/**
 * Request creator to fetch all active tokens in the queue
 *
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const getActiveTokens = (queueId) => ({ method: 'get', url: `/queue/${queueId}` });

/**
 * Request creator to fetch queue status by id
 *
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const getQueueStatus = (queueId) => ({
  method: 'get',
  url: `/queue/status?queueId=${queueId}`,
});

/**
 * Request creator to fetch queue status by name
 *
 * @param {string} queueName
 * @returns {Object} request - partial axios request without baseURL
 */
export const getQueueStatusByName = (queueName) => ({
  method: 'get',
  url: `/queue/status?queueName=${queueName}`,
});

/**
 * Request creator to delete queue by id
 *
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const deleteQueue = (queueId) => ({ method: 'delete', url: `/queue/${queueId}` });
