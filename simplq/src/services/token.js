
import { makeRequest } from './axios'

export const addtoQueue = async (name, contact, notifyable, queueId) => {
    const response = await makeRequest('post', '/user/add', {
      name: name,
      contactNumber: contact,
      queueId: queueId,
      notifyable: notifyable,
    });
    return response.data;
  };
  
  export const userStatus = async (queueId, tokenId) => {
    const response = await makeRequest('post', '/user/status', {
      queueId: queueId,
      tokenId: tokenId,
    });
    return response.data;
  };
  
  export const notifyUser = async (tokenId) => {
    const response = await makeRequest('put', '/user/alert', {
      tokenId: tokenId,
    });
    return response;
  };
  
  export const deleteFromQueue = async (tokenId) => {
    const response = await makeRequest('post', '/user/delete', {
      tokenId,
    });
    return response;
  };