import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "git-hangouts.firebaseapp.com",
  databaseURL: "https://git-hangouts.firebaseio.com",
  projectId: "git-hangouts",
  storageBucket: "git-hangouts.appspot.com",
  messagingSenderId: "501622215804"
};

firebase.initializeApp(config);

export default firebase;
