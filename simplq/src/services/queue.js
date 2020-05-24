import * as axios from "axios"

const URL = "localhost:4000/v1";

export const createQueue = async (name) => {
    const response = await axios.post(`${URL}/createQueue`, {
        name: name,
    });
    return response.data ? response.data.data : null;
};

export const readQueue = async (queueId) => {
    const response = await axios.post(`${URL}/readQueue`, {
        queueId: queueId,
    });
    return response.data;
}

export const addtoQueue = async (name, contact, notifyable, queueId) => {
    const response = await axios.post(`${URL}/addtoQueue`, {
        name: name,
        contact: contact,
        queueId: queueId,
        notifyable: notifyable,
    });
    return response.data;
}

export const userStatus = async (queueId, tokenId) => {
    const response = await axios.post(`${URL}/userStatus`, {
        queueId: queueId,
        tokenId: tokenId,
    });
    return response.data;
}

export const notifyUser = async (queueId, tokenId) => {
    const response = await axios.post(`${URL}/notifyUser`, {
        queueId: queueId,
        tokenId: tokenId,
    });
}

export const deleteFromQueue = async (queueId, tokenId) => {
    const response = await axios.post(`${URL}/deleteFromQueue`, {
        queueId: queueId,
        tokenId: tokenId,
    });
}
