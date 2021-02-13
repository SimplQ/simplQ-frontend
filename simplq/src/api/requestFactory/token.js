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

// Get a token by ID
export const get = (tokenId) => ({ method: 'get', url: `/token/${tokenId}` });

// Notify a token This will result in the user being notified by SMS, which is an upcoming feature
export const notify = (tokenId) => ({ method: 'put', url: `/token/notify/${tokenId}` });

// Remove a token from the queue. Can be called only by the person who created the token, and the queue manager.
export const remove = (tokenId) => ({ method: 'delete', url: `/token/${tokenId}` });
