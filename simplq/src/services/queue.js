import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyB039anyCFfSBs_nbuSfTx8BSRKU5t53fw",
    authDomain: "simplq-us.firebaseapp.com",
    databaseURL: "https://simplq-us.firebaseio.com",
    projectId: "simplq-us",
    storageBucket: "simplq-us.appspot.com",
    messagingSenderId: "80112004748",
    appId: "1:80112004748:web:080a125573a6ceb19995a9",
    measurementId: "G-H8WPNTDQF7"
  };

class QueueService {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.queues = firebase.firestore().collection("queuesFromFBFn");

        firebase.auth().signInAnonymously().catch(error => console.error(error));
        this.functions = firebase.app().functions();
        firebase.analytics();
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
        return response.data;
    }

    async addtoQueue(name, contact, notifyable, queueId) {
        const addtoQueueFBFn = this.functions.httpsCallable('addQueue');
        const response = await addtoQueueFBFn({
            name: name,
            contact: contact,
            queueId: queueId,
            notifyable: notifyable
        });
        return response.data;
    }

    async userStatus(queueId, tokenId) {
        const userStatusFBFn = this.functions.httpsCallable('userStatus');
        const response = await userStatusFBFn({
            queueId: queueId,
            tokenId: tokenId,
        });
        return response.data;
    }

    async notifyUser(queueId, tokenId) {
        const notifyUserFBFn = this.functions.httpsCallable("notifyUser");
        await notifyUserFBFn({
            queueId: queueId,
            tokenId: tokenId,
        });
    }

    deleteFromQueue(queueId, tokenId) {
        const deleteFromQueueFBFn = this.functions.httpsCallable('deleteFromQueue');
        return deleteFromQueueFBFn({
                queueId: queueId,
                tokenId: tokenId,
            });
    }
}


export default new QueueService();