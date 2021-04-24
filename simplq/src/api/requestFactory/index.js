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
 * makeAuthedRequest  hook. (See src/api/auth.js for usage details)
 *
 */

export {
  getUserQueues,
  getQueue,
  deleteQueue,
  getQueueInfo,
  getQueueInfoByName,
  createQueue,
  setQueueStatus,
  updateQueueSettings,
} from './queue';
export { createToken, getToken, deleteToken, notifyToken, getTokenByContactNumber } from './token';
