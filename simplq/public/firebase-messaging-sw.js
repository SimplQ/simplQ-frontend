/* eslint-disable */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCCW7gmWZli24N61NShh-8ALxVy3WtjqNU',
  authDomain: 'simplq-fe712.firebaseapp.com',
  projectId: 'simplq-fe712',
  storageBucket: 'simplq-fe712.appspot.com',
  messagingSenderId: '348531792421',
  appId: '1:348531792421:web:c481f1740405522d0f3dcc',
  measurementId: 'G-8N2SDV8VF5',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
