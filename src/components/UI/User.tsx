import { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../reduxStore/hooks';
import { selectUserName } from '../../reduxStore/userSlice';
import burger from '../assets/svgs/burger.svg';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const name = useAppSelector(selectUserName);
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Text className={toggle ? 'toggle' : ''}>Hi, {name}</Text>
      <BurgerContainer onClick={() => setToggle(!toggle)}>
        <Burger src={burger} alt="burger" />
      </BurgerContainer>
      <Dropdown className={toggle ? 'toggle' : ''}>
        <DropdownItem
          type="button"
          onClick={() => {
            signOut(auth);
            window.location.pathname = '/login';
            setToggle(!toggle);
          }}
        >
          Logout
        </DropdownItem>
      </Dropdown>
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
  z-index: 20;
  color: #ffffff;
  transition: color 0.3s ease-in-out;

  &.toggle {
    color: #be123c;
  }
`;

const BurgerContainer = styled.div`
  width: 36px;
  height: 36px;
  background: #be123c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Burger = styled.img`
  z-index: 20;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 350px;
  height: 350px;
  background: #ffffff;
  border-radius: 0 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: -1;
  transform: translateY(-100%);
  transform-origin: top right;
  transition: transform 0.3s ease-in-out;
  &.toggle {
    transform: translateY(0);
  }
`;

const DropdownItem = styled.button`
  height: 40px;
  background: #be123c;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 0 20px;
`;
