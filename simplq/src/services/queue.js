import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth"

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
        this.queues = firebase.firestore().collection("queues");

        firebase.auth().signInAnonymously().catch(error => console.error(error));
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