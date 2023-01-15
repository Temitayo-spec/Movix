import { signOut } from 'firebase/auth';
import { Header } from '../components';
import { auth } from '../firebase/firebase-config';

const Home = () => {
  return (
    <div>
      <Header />
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
