import styled from 'styled-components';
import ChangeMovie from './ChangeMovie';
import imdb from '../assets/imdb.png';
import tomato from '../assets/tomato.png';
import play from '../assets/svgs/ic-play.svg';
import { useEffect, useState } from 'react';
import { fetchMovie } from '../../api/fetchMovie';
import { baseImageLink } from '../../link';

const Banner = () => {
  const [movie, setMovie] = useState<any>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAPI = async () => {
    setMovie(await fetchMovie());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(movie);
  return (
    <Container>
      <Image
        src={`${baseImageLink}/${movie?.backdrop_path}`}
        alt="Banner_img"
      />
      <MainContent>
        <MainContentInner>
          <LHS>
            <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
            <RatingContainer>
              <IMDBRating>
                <img src={imdb} alt="IMDB" />
                <span>{movie?.vote_average * 10} / 100</span>
              </IMDBRating>
              <TomatoRating>
                <img src={tomato} alt="Tomato" />
                <span>
                  {
                    // eslint-disable-next-line no-nested-ternary
                    movie?.vote_average > 7
                      ? 'Fresh'
                      : movie?.vote_average > 5
                      ? 'Rotten'
                      : 'Bad'
                  }
                </span>
              </TomatoRating>
            </RatingContainer>
            <Description>{movie?.overview}</Description>
            <ButtonContainer>
              <TrailerButton>
                <img src={play} alt="Trailer" /> Watch Trailer
              </TrailerButton>
            </ButtonContainer>
          </LHS>
          <RHS>
            <ChangeMovie fetchMovie={fetchAPI} />
          </RHS>
        </MainContentInner>
      </MainContent>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const MainContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const MainContentInner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LHS = styled.div`
  padding: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  flex-direction: column;
  span {
    color: #f9a825;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const IMDBRating = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
    object-fit: contain;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
  }
`;

const TomatoRating = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5rem;
    object-fit: contain;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TrailerButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.375rem 1rem;
  gap: 8px;
  height: 36px;
  background: #be123c;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const RHS = styled.div``;
