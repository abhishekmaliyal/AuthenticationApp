import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7_tYvebpMb0lFVsdYPysoBIgRVMRwM9g',
  authDomain: 'authentication-96354.firebaseapp.com',
  projectId: 'authentication-96354',
  storageBucket: 'authentication-96354.appspot.com',
  messagingSenderId: '561450431118',
  appId: '1:561450431118:web:c83208332d9cf69e97cfdf',
  measurementId: 'G-BDFQCWZJQD',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
