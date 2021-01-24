export const create = (name, contact, notifiable, queueId) => {
  return {
    method: 'post',
    url: '/token',
    data: {
      name,
      contactNumber: contact,
      queueId,
      notifiable,
    },
  };
};

export const get = (tokenId) => {
  return { method: 'get', url: `/token/${tokenId}` };
};

export const notify = (tokenId) => {
  return { method: 'put', url: `/token/notify/${tokenId}` };
};

export const remove = (tokenId) => {
  return { method: 'delete', url: `/token/${tokenId}` };
};
