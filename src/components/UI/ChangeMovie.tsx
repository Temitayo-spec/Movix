import styled from 'styled-components';
import Num from './Num';

type Props = {};

const ChangeMovie = (props: Props) => {
  const num = [1, 2, 3, 4, 5];
  return (
    <Container>
      {num.map((item) => (
        <Num num={item} key={item} />
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
