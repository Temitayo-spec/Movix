import styled from 'styled-components';
import { ChangeMovieProps } from '../../typings';
import Num from './Num';

const ChangeMovie = ({ fetchMovie }: ChangeMovieProps) => {
  const num = [1, 2, 3, 4, 5];
  return (
    <Container>
      {num.map((item) => (
        <Num num={item} key={item} fetchMovie={fetchMovie} />
      ))}
    </Container>
  );
};

export default ChangeMovie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  height: 100%;
  gap: 15px;
`;
