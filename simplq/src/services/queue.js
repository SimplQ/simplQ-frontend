import * as axios from "axios"

const URL = "https://backend.simplq.me/v1";

export const createQueue = async (queueName) => {
    const response = await axios.post(`${URL}/queue/creat`, {
        queueName: queueName,
    });
    return response.data;
};

export const readQueue = async (queueId) => {
    const response = await axios.post(`${URL}/queue/info`, {
        queueId: queueId,
    });
    return response.data;
}

export const addtoQueue = async (name, contact, notifyable, queueId) => {
    const response = await axios.post(`${URL}/user/add`, {
        name: name,
        contact: contact,
        queueId: queueId,
        notifyable: notifyable,
    });
    return response.data;
}

export const userStatus = async (queueId, tokenId) => {
    const response = await axios.post(`${URL}/user/status`, {
        queueId: queueId,
        tokenId: tokenId,
    });
    return response.data;
}

export const notifyUser = async (queueId, tokenId) => {
    const response = await axios.post(`${URL}/user/alert`, {
        queueId: queueId,
        tokenId: tokenId,
    });
    return response;
}

export const deleteFromQueue = async (queueId, tokenId) => {
    const response = await axios.post(`${URL}/user/delete`, {
        queueId: queueId,
        tokenId: tokenId,
    });
    return response;
}
