import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4GWs7yYEMZPy8pwPvaDak16mMj6MabVY",
  authDomain: "progwebii.firebaseapp.com",
  projectId: "progwebii",
  storageBucket: "progwebii.appspot.com",
  messagingSenderId: "207664077491",
  appId: "1:207664077491:web:c586642967b6d270b5aec6",
  measurementId: "G-FVFEHCJF2J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);