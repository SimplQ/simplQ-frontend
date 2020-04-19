import axios from "axios"

const BASEURL = `http://localhost:3000/`

export const getQueuedItems = async (queueId) => {
    const res = await axios.get(BASEURL + queueId)
    if (res.data){
        return res.data.data;
    } else {
        return [];
    }
}

export const createQueue = async (queueId) => {
    const res = await axios.get(BASEURL + queueId)
    if (res.data){
        return res.data.data;
    } else {
        return '';
    }
}
