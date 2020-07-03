
import { makeRequest } from './axios'

export const addtoQueue = async (name, contact, notifyable, queueId) => {
    const response = await makeRequest('post', '/token', {
      name: name,
      contactNumber: contact,
      queueId: queueId,
      notifyable: notifyable,
    });
    return response.data;
  };
  
  export const userStatus = async (tokenId) => {
    const response = await makeRequest('get', '/token/' + tokenId);
    return response.data;
  };
  
  export const notifyUser = async (tokenId) => {
    const response = await makeRequest('put', '/token/notify/' + tokenId);
    return response;
  };
  
  export const deleteFromQueue = async (tokenId) => {
    const response = await makeRequest('delete', '/token/' + tokenId);
    return response;
  };