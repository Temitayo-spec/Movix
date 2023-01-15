import styled from 'styled-components';
import tv from '../../components/assets/tv.png';
import Search from '../General/Search';
import User from './User';

const Header = () => {
  return (
    <Container>
      <Inner>
        <LogoContainer>
          <Logo src={tv} alt="movix_logo" />
          <LogoText>Movix</LogoText>
        </LogoContainer>
        <Search />
        <User />
      </Inner>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Inner = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 2;
`;

const Logo = styled.img``;

const LogoText = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 24px;
  color: #ffffff;
`;
