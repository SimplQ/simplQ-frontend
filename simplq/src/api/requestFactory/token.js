/**
 * Request creator to create new token
 *
 * @param {string} name
 * @param {string} contactNumber
 * @param {boolean} notifiable
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const createToken = (name, contactNumber, notifiable, queueId) => ({
  method: 'post',
  url: '/token',
  data: {
    name,
    contactNumber,
    notifiable,
    queueId,
  },
});

/**
 * Request creator to get a token by ID
 *
 * @param {string} tokenId
 * @returns {Object} request - partial axios request without baseURL
 */
export const getToken = (tokenId) => ({ method: 'get', url: `/token/${tokenId}` });

/**
 * Request creator to notify token.
 *
 * @param {string} tokenId
 * @returns {Object} request - partial axios request without baseURL
 */
export const notifyToken = (tokenId) => ({ method: 'put', url: `/token/notify/${tokenId}` });

/**
 * Remove a token from the queue. Can be called only by the person who created the token, and the queue manager
 *
 * @param {string} tokenId
 * @returns {Object} request - partial axios request without baseURL
 */
export const deleteToken = (tokenId) => ({ method: 'delete', url: `/token/${tokenId}` });
