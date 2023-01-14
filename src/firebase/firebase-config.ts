import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'movix-a2fc9.firebaseapp.com',
  projectId: 'movix-a2fc9',
  storageBucket: 'movix-a2fc9.appspot.com',
  messagingSenderId: '1011445293174',
  appId: '1:1011445293174:web:e13ebac6970dfdf3147f57',
  measurementId: 'G-H0SMCHRY6W',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
