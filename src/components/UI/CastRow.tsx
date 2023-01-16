import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchFeatured } from '../../api/fetchFeatured';
import { baseImageLink } from '../../link';
import { RowProps } from '../../typings';
import cheveronRight from '../assets/svgs/ic-chevron-right.svg';
import Card from '../General/Card';

const CastRow = ({ title, fetchUrl, isLargeRow = false }: RowProps) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchFeatured({ fetchUrl }));
    };
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movies, 'featured');
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <More>
          <p>Show More</p>
          <span>
            <img src={cheveronRight} alt="chevronRight" />
          </span>
        </More>
      </Header>
      <Content>
        {movies?.map((item: any, key) => {
          return (
            <Wrapper key={key} className={isLargeRow ? 'largeRow' : 'smallRow'}>
              <Card
                src={`${baseImageLink}/${
                  isLargeRow ? item?.profile_path : item?.profile_path
                }`}
                title={item?.name}
              />
            </Wrapper>
          );
        })}
      </Content>
    </Container>
  );
};

export default CastRow;

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

const Wrapper = styled.div`
  width: 350px;

  &.largeRow {
    width: 250px;
  }

  &.smallRow {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
