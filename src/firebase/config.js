import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB65H5Aetay7Etx-glVE2mBnRB2TWrIQTg',
  authDomain: 'fanel-cookingbook.firebaseapp.com',
  projectId: 'fanel-cookingbook',
  storageBucket: 'fanel-cookingbook.appspot.com',
  messagingSenderId: '404470894994',
  appId: '1:404470894994:web:cb312ef7ccbccd83db714b',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };