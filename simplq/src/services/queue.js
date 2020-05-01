import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAv1Us5mnNHg4_JWgJxcjhvGaBIfwXqbbo",
  authDomain: "simplq-nithin.firebaseapp.com",
  databaseURL: "https://simplq-nithin.firebaseio.com",
  projectId: "simplq-nithin",
  storageBucket: "simplq-nithin.appspot.com",
  messagingSenderId: "199340496527",
  appId: "1:199340496527:web:d8d149fa464366957882fa",
  measurementId: "G-D89WHXSBVQ"
};

class QueueService {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.queues = firebase.firestore().collection("queuesFromFBFn");

        firebase.auth().signInAnonymously().catch(error => console.error(error));
        this.functions = firebase.app().functions('asia-northeast3 ');
    }

    async createQueue(name) {
        const createQueueFBFn = firebase.functions().httpsCallable('createQueue');
        const response = await createQueueFBFn({
            name: name,
        });
        console.log(`Called the createQueue fn with name ${name} and docId is ${response.data.data}`);
        return response.data.data;
    }

    async readQueue(queueId) {
        const readQueueFBFn = firebase.functions().httpsCallable('readQueue');
        const response = await readQueueFBFn({
            queueId: queueId,
        });
        console.log(`Called the readQueue fn with queueId ${queueId}`);
        return response.data;
    }

    async addtoQueue(name, contact, queueId) {
        const addtoQueueFBFn = firebase.functions().httpsCallable('addtoQueue');
        const response = await addtoQueueFBFn({
            name: name,
            contact: contact,
            queueId: queueId,
        });
        console.log(`Called the addtoQueue fn with ${name}, ${contact}, ${queueId}`);
        return response.data;
    }

    async userIndexQueue(queueId, tokenId) {
        const userIndexQueueFBFn = firebase.functions().httpsCallable('userIndexQueue');
        const response = await userIndexQueueFBFn({
            queueId: queueId,
            tokenId: tokenId,
        });
        console.log(`Called the userIndexQueue fn with ${tokenId}, ${queueId}`);
        return response.data;    }
        notifyUser(queueId, tokenId) {
            this.queues.doc(queueId).collection("users").doc(tokenId).update({"notified": true});
        }
    
        deleteFromQueue(queueId, tokenId) {
            this.queues.doc(queueId).collection("users").doc(tokenId).delete();
        }
        async userNotificationStatusQueue(queueId, tokenId) {
            const users = this.queues.doc(queueId).collection("users");
            const notified = await users.doc(tokenId).get().then(doc => doc.data().notified);
            return notified;
        }
}


export default new QueueService();