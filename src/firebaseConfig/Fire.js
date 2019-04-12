import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAcAMBspRLMoHFr8B9ug1OuMtTMduFEmk0",
  authDomain: "multistep-checkout-auth.firebaseapp.com",
  databaseURL: "https://multistep-checkout-auth.firebaseio.com",
  projectId: "multistep-checkout-auth",
  storageBucket: "multistep-checkout-auth.appspot.com",
  messagingSenderId: "762147000858"
};

const fire = firebase.initializeApp(config);
export default fire;