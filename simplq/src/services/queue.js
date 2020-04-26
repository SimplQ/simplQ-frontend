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
        this.db = firebase.firestore();
        this.queues = this.db.collection("queues");
    }
    createQueue(name) {
        return this.queues.add({
            name: name,
            users: []
        }).then(docRef => docRef.id)
            .catch(() => console.log("Error creating queue"));
    }
    addtoQueue(name, contact, queueId) {
        return this.queues.doc(queueId)
            .collection("users").add({ name: name, contact: contact })
            .then(docRef => docRef.id).catch(() => console.log("Error adding to queue"));

    }
}


export default new QueueService();