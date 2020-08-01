import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBldpFY2tfGzzaNszuvVC2d3xvZ7Io3cEA',
  authDomain: 'facebook-messenger-clone-66a4b.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone-66a4b.firebaseio.com',
  projectId: 'facebook-messenger-clone-66a4b',
  storageBucket: 'facebook-messenger-clone-66a4b.appspot.com',
  messagingSenderId: '771745177729',
  appId: '1:771745177729:web:7f10a8c8048b2b6d132d80',
  measurementId: 'G-RXWR3JVFMV',
});

const db = firebaseApp.firestore();

export default db;
