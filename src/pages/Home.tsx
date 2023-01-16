import { Header, Row } from '../components';
import Banner from '../components/UI/Banner';
import styled from 'styled-components';
import requests from '../axios/request';
import CastRow from '../components/UI/CastRow';
import Footer from '../components/UI/Footer';

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

      <Row
        title="New Arrival"
        fetchUrl={requests.fetchNewArrivals}
        isLargeRow
      />
      <Row
        title="Exclusive Videos"
        fetchUrl={requests.fetchExclusiveVideos}
        isLargeRow
      />
      <CastRow title="Featured Cast" fetchUrl={requests.fetchFeaturedCasts} />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
