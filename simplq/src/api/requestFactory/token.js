// Create a new token. This request is used to add a new token intoo the queue
export const create = (name, contact, notifiable, queueId) => ({
  method: 'post',
  url: '/token',
  data: {
    name,
    contactNumber: contact,
    queueId,
    notifiable,
  },
});

// Get a token by ID
export const get = (tokenId) => ({ method: 'get', url: `/token/${tokenId}` });

// Notify a token This will result in the user being notified by SMS, which is an upcoming feature
export const notify = (tokenId) => ({ method: 'put', url: `/token/notify/${tokenId}` });

// Remove a token from the queue. Can be called only by the person who created the token, and the queue manager.
export const remove = (tokenId) => ({ method: 'delete', url: `/token/${tokenId}` });
