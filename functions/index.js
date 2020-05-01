// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();

exports.createQueue = functions.https.onCall(async (data, context) => {
    try {
        name = data.name;
        console.log('Starting createQueue');
        const queues = admin.firestore().collection("queuesFromFBFn");
        const docRef = await queues.add({
            name: name,
        });
        //console.log({docRef});
        return {data:docRef.id};
    } catch (err) {
        console.log("CreateQueue in firebase failed: " + err);
        return "500";
    }

});

exports.readQueue = functions.https.onCall(async (data, context) => {
    const queueId = data.queueId;
    const queues = admin.firestore().collection("queuesFromFBFn");
    const namePromise = queues.doc(queueId).get().then(doc => {
        if (doc.exists) {
            return doc.data().name;
        } else {
            throw new Error("Queue not found");
        }
    });

    const usersPromise = queues.doc(queueId).collection("users").get()
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
});