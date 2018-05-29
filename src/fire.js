import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCWbftd-fcyaxIl4FsStZ1jk5cg5K-JxVc",
  authDomain: "embedded-40bb4.firebaseapp.com",
  databaseURL: "https://embedded-40bb4.firebaseio.com",
  storageBucket: "embedded-40bb4.appspot.com",
  messagingSenderId: "207207229312"
};
var fire = firebase.initializeApp(config);
export default fire;