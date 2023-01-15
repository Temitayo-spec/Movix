import styled from 'styled-components';
import { useAppSelector } from '../../reduxStore/hooks';
import { selectUserName } from '../../reduxStore/userSlice';
import burger from '../assets/svgs/burger.svg';

const User = () => {
  const name = useAppSelector(selectUserName);
  return (
    <Container>
      <Text>Hi, {name}</Text>
      <BurgerContainer>
        <Burger src={burger} alt="burger" />
      </BurgerContainer>
    </Container>
  );
};

export default User;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 2;
  justify-content: flex-end;
`;

const Text = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  color: #ffffff;
`;

const BurgerContainer = styled.div`
  width: 36px;
  height: 36px;
  background: #be123c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Burger = styled.img``;
