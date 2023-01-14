import styled from 'styled-components';
import { useAppSelector } from '../reduxStore/hooks';
import {
  selectUser,
  selectUserEmail,
  selectUserName,
  selectUserPassword,
} from '../reduxStore/userSlice';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { Forms } from '../components';
import movix_logo from '../components/assets/movix_logo.png';
import { auth } from '../firebase/firebase-config';

const Register = () => {
  const name = useAppSelector(selectUserName);
  const email = useAppSelector(selectUserEmail);
  const password = useAppSelector(selectUserPassword);

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // navigate to Login page
      navigate('/login');
    } else {
      // User is signed out
      // ...
      alert('User is signed out');
    }
  });
    
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // navigate to Login page
      if (user) {
        navigate('/login');
      }
    } catch (error: any) {
      console.log('error', error.message);
    }
  };
  return (
    <Container>
      <Content>
        <Header>
          <Logo src={movix_logo} alt="movix_logo" />
          <H3>Hi, Welcome</H3>
          <P>Please sign-up to start your own experience</P>
        </Header>
        <Forms isLogin={false} onSubmit={onSubmit} />
      </Content>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fff;
`;

const Content = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding: 1.25rem; // 20px
  gap: 1.5rem; // 24px

  @media screen and (max-width: 768px) {
    padding: 1rem; // 16px
    gap: 1rem; // 16px
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  text-align: center;
`;

const Logo = styled.img`
  width: 73px; // 4.5625rem
  height: 73px; // 4.5625rem
`;

const H3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 23px; // 1.4375rem
  text-align: center;
  color: #000000;
`;

const P = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 18px; // 1.125rem
  color: #747474;
`;
