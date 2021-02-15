/*
 * Creates axios config objects for the various backend API requests
 * Example object:
 *
 * {
 *     method: 'post',
 *     url: '/user/12345',
 *     data: {
 *         firstName: 'Fred',
 *         lastName: 'Flintstone'
 *     }
 * }
 *
 * These objects are used to make requests from components using the
 * useRequest  hook. (See src/api/useRequest.js for usage example)
 *
 */

export {
  createQueue,
  getUserQueues,
  deleteQueue,
  getQueueStatus,
  getQueueStatusByName,
  getActiveTokens,
} from './queue';
export { createToken, getToken, deleteToken, notifyToken } from './token';
