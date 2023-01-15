import styled from 'styled-components';
import cheveronRight from '../assets/svgs/ic-chevron-right.svg';
import Card from '../General/Card';
import { dummyData } from '../General/DummyData';

const FeaturedMovie = () => {
  return (
    <Container>
      <Header>
        <Title>Featured Movie</Title>
        <More>
          <p>Show More</p>
          <span>
            <img src={cheveronRight} alt="chevronRight" />
          </span>
        </More>
      </Header>
      <Content>
        {dummyData.map((item, key) => {
          return (
            <Card
              key={key}
              src={item.src}
              title={item.title}
              imdb={item.imdb}
              tomato={item.tomato}
              genre={item.genre}
              country={item.country}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default FeaturedMovie;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: 'DM Sans', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  color: #000000;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  p {
    font-weight: 400;
    font-size: 1.15rem;
    color: #be123c;
  }

  span {
    width: 20px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 20px 0;
`;
