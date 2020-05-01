// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();

QUEUES_COLLECTION_NAME = "queuesFromFBFn";

exports.createQueue = functions.https.onCall(async (data, context) => {
    try {
        name = data.name;
        console.log('Starting createQueue');
        const queue = admin.firestore().collection(QUEUES_COLLECTION_NAME);
        const docRef = await queue.add({
            name: name,
        });
        return {data:docRef.id};
    } catch (err) {
        console.log("CreateQueue in firebase failed: " + err);
        return "500";
    }
});

exports.readQueue = functions.https.onCall(async (data, context) => {
    console.log("Starting readQueue");
    const queueId = data.queueId;
    const queue = admin.firestore().collection(QUEUES_COLLECTION_NAME);
    
    const namePromise = queue.doc(queueId).get().then(doc => {
        if (doc.exists) {
            return doc.data().name;
        } else {
            throw new Error("Queue not found");
        }
    });

    const usersPromise = queue.doc(queueId).collection("users").get()
        .then(snapshot => {
            const users = [];
            snapshot.forEach(doc => {
                const user = doc.data();
                user.tokenId = doc.id;
                users.push(user)
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
});

exports.addToQueue = functions.https.onCall(async (data, context) => {
    console.log("Starting addToQueue");
    const name = data.name, contact = data.contact, queueId = data.queueId;
    const queue = admin.firestore().collection(QUEUES_COLLECTION_NAME);
    return queue.doc(queueId).collection("users").add({
        name: name,
        contact: contact,
        timestamp: firebase.firestore.Timestamp.now(),
      })
      .then((docRef) => docRef.id)
      .catch(() => console.log("Error adding to queue"));
});

exports.userIndexQueue = functions.https.onCall(async (data, context) => {
    console.log("Starting userIndexQueue");
    const queueId = data.queueId, tokenId = data.tokenId;
    const queue = admin.firestore().collection(QUEUES_COLLECTION_NAME);
    const users = queue.doc(queueId).collection("users");
    const timeStamp = await users.doc(tokenId).get()
                        .then(doc => doc.data().timestamp);
    return users.where("timestamp", "<", timeStamp).get()
        .then(snapshot => snapshot.size);
});