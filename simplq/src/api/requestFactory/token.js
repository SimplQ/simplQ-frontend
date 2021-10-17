/**
 * Get metadata for all tokens created by the current user
 *
 * @returns {Object} request - partial axios request without baseURL
 */
export const getUserTokens = () => ({ method: 'get', url: '/tokens' });

/**
 * Request creator to create new token
 *
 * @param {string} name
 * @param {string} contactNumber
 * @param {boolean} notifiable
 * @param {string} queueId
 * @returns {Object} request - partial axios request without baseURL
 */
export const createToken = (name, contactNumber, notifiable, queueId, emailId) => ({
  method: 'post',
  url: '/token',
  data: {
    name,
    contactNumber,
    notifiable,
    queueId,
    emailId,
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

export const getTokenByContactNumber = (queueId, contactNumber) => ({
  method: 'get',
  url: `/token?queueId=${queueId}&contactNumber=${encodeURIComponent(contactNumber)}`,
});
