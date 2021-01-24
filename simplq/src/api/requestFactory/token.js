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

export const get = (tokenId) => ({ method: 'get', url: `/token/${tokenId}` });

export const notify = (tokenId) => ({ method: 'put', url: `/token/notify/${tokenId}` });

export const remove = (tokenId) => ({ method: 'delete', url: `/token/${tokenId}` });
