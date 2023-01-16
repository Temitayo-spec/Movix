/* eslint-disable array-callback-return */
import styled from 'styled-components';
import { CardProps } from '../../typings';
import imdbImg from '../assets/imdb.png';
import tomatoImg from '../assets/tomato.png';

const Card = ({ src, title, imdb, tomato, genre, country }: CardProps) => {
  return (
    <Container>
      <Image src={src} alt="Banner_img" />
      <MainContent>
        <Country>{country}</Country>
        <Title>{title}</Title>
        {!imdb && !tomato ? null : (
          <RatingContainer>
            <IMDBRating>
              <img src={imdbImg} alt="IMDB" />
              <span>{(imdb as number) * 10} / 100</span>
            </IMDBRating>
            <TomatoRating>
              <img src={tomatoImg} alt="Tomato" />
              {(tomato as number) * 10 > 60 ? (
                <span style={{ color: '#2ecc71' }}>Fresh</span>
              ) : (
                <span style={{ color: '#e74c3c' }}>Rotten</span>
              )}
            </TomatoRating>
          </RatingContainer>
        )}
        <Description>
          {genre
            ?.map((g) => {
              if (g === 28) {
                return 'Action';
              } else if (g === 12) {
                return 'Adventure';
              } else if (g === 16) {
                return 'Animation';
              } else if (g === 35) {
                return 'Comedy';
              } else if (g === 80) {
                return 'Crime';
              } else if (g === 99) {
                return 'Documentary';
              } else if (g === 18) {
                return 'Drama';
              } else if (g === 10751) {
                return 'Family';
              } else if (g === 14) {
                return 'Fantasy';
              } else if (g === 36) {
                return 'History';
              } else if (g === 27) {
                return 'Horror';
              } else if (g === 10402) {
                return 'Music';
              } else if (g === 9648) {
                return 'Mystery';
              } else if (g === 10749) {
                return 'Romance';
              } else if (g === 878) {
                return 'Science Fiction';
              } else if (g === 10770) {
                return 'TV Movie';
              } else if (g === 53) {
                return 'Thriller';
              } else if (g === 10752) {
                return 'War';
              } else if (g === 37) {
                return 'Western';
              }
            })
            .join(', ')}
        </Description>
      </MainContent>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  font-family: 'DM Sans', sans-serif;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-height: 370px;
  width: 100%;
  object-fit: contain;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

const Country = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 16px;
  color: #9ca3af;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 23px;
  color: #111827;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
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
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 16px;
  color: #9ca3af;
`;
