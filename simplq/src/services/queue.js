import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyAljEw-qHOOCRCajBI8-RWbU8kUxzSTrm8",
    authDomain: "simplq-dev.firebaseapp.com",
    databaseURL: "https://simplq-dev.firebaseio.com",
    projectId: "simplq-dev",
    storageBucket: "simplq-dev.appspot.com",
    messagingSenderId: "755413125414",
    appId: "1:755413125414:web:95f28cc68af7e2604c99e7",
    measurementId: "G-CKLP59JD7K"
};

class QueueService {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.queues = firebase.firestore().collection("queuesFromFBFn");

        firebase.auth().signInAnonymously().catch(error => console.error(error));
        this.functions = firebase.app().functions('asia-east2');
    }

    createQueue(name) {
        const createQueueFBFn = this.functions.httpsCallable('createQueue');
        return createQueueFBFn({
            name: name,
        }).then(response => response.data.data)
    }

    async readQueue(queueId) {
        const readQueueFBFn = this.functions.httpsCallable('readQueue');
        const response = await readQueueFBFn({
            queueId: queueId,
        });
        console.log(`Called the readQueue fn with queueId ${queueId}`);
        return response.data;
    }

    async addtoQueue(name, contact, queueId) {
        const addtoQueueFBFn = this.functions.httpsCallable('addQueue');
        const response = await addtoQueueFBFn({
            name: name,
            contact: contact,
            queueId: queueId,
        });
        console.log(`Called the addtoQueue fn with ${name}, ${contact}, ${queueId}`);
        return response.data;
    }

    async userIndexQueue(queueId, tokenId) {
        const userIndexQueueFBFn = this.functions.httpsCallable('userIndexQueue');
        const response = await userIndexQueueFBFn({
            queueId: queueId,
            tokenId: tokenId,
        });
        console.log(`Called the userIndexQueue fn with ${tokenId}, ${queueId}`);
        return response.data;
    }

    async notifyUser(queueId, tokenId) {
        const notifyUserFBFn = this.functions.httpsCallable("notifyUserFBFn");
        await notifyUserFBFn({
            queueId: queueId,
            tokenId: tokenId,
        });
        console.log(`Called the notifyUser fn with ${tokenId}, ${queueId}`);
    }

    async deleteFromQueue(queueId, tokenId) {
        const deleteFromQueueFBFn = this.functions.httpsCallable('deleteFromQueue');
        await deleteFromQueueFBFn({
                queueId: queueId,
                tokenId: tokenId,
            });
            console.log(`Called the deleteFromQueue fn with ${tokenId}, ${queueId}`);
    }
    async userNotificationStatusQueue(queueId, tokenId) {
        const userNotificationStatusQueueFBFn = this.functions.httpsCallable('userNotificationStatusQueue');
        const response= await userNotificationStatusQueueFBFn({
            queueId: queueId,
            tokeinId: tokenId,
        });
        console.log(`Called the  serNotificationStatusQueue fn with ${tokenId}, ${queueId}`);
        return response.data;
    }
}


export default new QueueService();