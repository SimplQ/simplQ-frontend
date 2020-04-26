import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNv4v8sTB0MS9K2Sut9-aETG6v_fJdU0k",
    authDomain: "simplq-9f197.firebaseapp.com",
    databaseURL: "https://simplq-9f197.firebaseio.com",
    projectId: "simplq-9f197",
    storageBucket: "simplq-9f197.appspot.com",
    messagingSenderId: "922027257596",
    appId: "1:922027257596:web:289581e7f35476eb7e7179",
    measurementId: "G-G95KXMDJYE"
};

class QueueService {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.queues = firebase.firestore().collection("navaq");
    }

    createQueue(name) {
        return this.queues.add({
            name: name
        }).then(docRef => docRef.id)
            .catch(() => console.log("Error creating queue"));
    }

    async readQueue(queueId) {
        const namePromise = this.queues.doc(queueId).get().then(doc => {
            if (doc.exists) {
                return doc.data().name;
            } else {
                throw new Error("Queue not found");
            }
        });

        const usersPromise = this.queues.doc(queueId).collection("users").get()
            .then(snapshot => {
                const users = [];
                snapshot.forEach(doc => {
                    users.push(doc.data())
                });
                return users;
            })
            .catch(err => {
                throw new Error('Error getting users from queue', err);
            });

        return {
            name: await namePromise,
            users: await usersPromise
        };
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