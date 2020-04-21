import axios from "axios"

const BASEURL = "http://localhost:3000/v1/"

export const getQueuedItems = async (queueId) => {
    const res = await axios.get(BASEURL + queueId)
    if (res.data){
        return res.data;
    } else {
        return [];
    }
}

export const createQueue = async (queueName) => {
    const res = await axios.post(BASEURL + 'queue', {queueName: queueName})
    if (res.data){
        return res.data;
    } else {
        return '';
    }
}
