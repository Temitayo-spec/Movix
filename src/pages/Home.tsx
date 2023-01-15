import { signOut } from 'firebase/auth';
import { Header } from '../components';
import Banner from '../components/UI/Banner';
import FeaturedMovie from '../components/UI/FeaturedMovie';
import { auth } from '../firebase/firebase-config';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <FeaturedMovie />
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        log out
      </button>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
