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
        this.functions = firebase.functions();
    }

    async createQueue(name) {
        const createQueueFBFn = firebase.functions().httpsCallable('createQueue');
        const docId = await createQueueFBFn({
            name: name,
        });
        console.log(`Called the createQueue fn with name ${name} and docId is ${docId.data.data}`);
        return docId.data.data;
    }

    async readQueue(queueId) {
        const readQueueFBFn = firebase.functions().httpsCallable('readQueue');
        const result = await readQueueFBFn({
            queueId: queueId,
        });
        console.log(`Called the readQueue fn with queuId ${queueId}`);
        return result.data;
    }

    addtoQueue(name, contact, queueId) {
        return this.queues.doc(queueId)
            .collection("users").add({
                name: name, contact: contact, "timestamp": firebase.firestore.Timestamp.now()
            })
            .then(docRef => docRef.id).catch(() => console.log("Error adding to queue"));

    }
    async userIndexQueue(queueId, tokenId) {
        const users = this.queues.doc(queueId).collection("users");
        const timeStamp = await users.doc(tokenId).get().then(doc => doc.data().timestamp);
        return users.where("timestamp", "<", timeStamp).get().then(snapshot => snapshot.size);
    }
}


export default new QueueService();