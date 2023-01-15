import { signOut } from 'firebase/auth';
import { Header, Row } from '../components';
import Banner from '../components/UI/Banner';
import { auth } from '../firebase/firebase-config';
import styled from 'styled-components';
import requests from '../axios/request';
import CastRow from '../components/UI/CastRow';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Row
        title="Featured Movies"
        fetchUrl={requests.fetchFeaturedMovies}
        isLargeRow
      />
      <Row title="New Arrival" fetchUrl={requests.fetchNewArrivals} />
      <Row
        title="Exclusive Videos"
        fetchUrl={requests.fetchExclusiveVideos}
        isLargeRow
      />
      <CastRow title="Featured Cast" fetchUrl={requests.fetchFeaturedCasts} />
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
