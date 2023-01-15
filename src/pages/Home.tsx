import { signOut } from 'firebase/auth';
import { Header } from '../components';
import Banner from '../components/UI/Banner';
import { auth } from '../firebase/firebase-config';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
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
