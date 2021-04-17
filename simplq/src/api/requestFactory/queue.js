/**
 * Get metadata for all queues created by the current user
 *
 * @returns {Object} request - partial axios request without baseURL
 */
export const getUserQueues = () => ({ method: 'get', url: '/queues' });

/**
 * Create a new queue with given name
 *
 * @returns {Object} request - partial axios request without baseURL
 */

export const createQueue = (queueName) => ({ method: 'post', url: '/queue', data: { queueName } });

/**
 * Request creator to fetch queue and belonging tokens by id
 *
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const getQueue = (queueId) => ({ method: 'get', url: `/queue/${queueId}` });

/**
 * Request creator to fetch queue info by id
 *
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const getQueueInfo = (queueId) => ({
  method: 'get',
  url: `/queue/status?queueId=${queueId}`,
});

/**
 * Request creator to fetch queue info by name
 *
 * @param {string} queueName
 * @returns {Object} request - partial axios request without baseURL
 */
export const getQueueInfoByName = (queueName) => ({
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

/**
 * Request creator to set the queue status
 *
 * @param {string} queueId
 * @param {string} status new status of the queue. Possible values are PAUSED and ACTIVE
 * @returns {Object} request - partial axios request without baseURL
 */
export const setQueueStatus = (queueId, status) => ({
  method: 'post',
  url: `/queue/${queueId}`,
  data: { status },
});
