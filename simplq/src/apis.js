import axios from 'axios';

const BASEURL = 'http://localhost:3000/v1/';

export const getQueuedItems = async (queueId) => {
  const res = await axios.get(BASEURL + queueId);
  if (res.data) {
    return res.data;
  }
  return [];
};

export const createQueue = async (queueName) => {
  const res = await axios.post(`${BASEURL}queue`, { queueName });
  if (res.data) {
    return res.data;
  }
  return '';
};
