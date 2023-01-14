import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase-config';

const Home = () => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Home;
