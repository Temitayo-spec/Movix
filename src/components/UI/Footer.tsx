import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fb from '../assets/svgs/ic-fb.svg';
import instagram from '../assets/svgs/ic-instagram.svg';
import twitter from '../assets/svgs/ic-twitter.svg';
import youtube from '../assets/svgs/ic-youtube.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <SocialIcon src={fb} alt="Facebook" />
        <SocialIcon src={twitter} alt="Twitter" />
        <SocialIcon src={instagram} alt="Instagram" />
        <SocialIcon src={youtube} alt="Youtube" />
      </SocialContainer>
      <LinksContainer>
        <Link to="#">Conditions of Use</Link>
        <Link to="#">Privacy & Policy</Link>
        <Link to="#">Press Room</Link>
      </LinksContainer>
      <FooterText>
        <p>© 2021 Movix</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  gap: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.15rem;
    line-height: 23px;
    color: #111827;
  }
`;

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #6b7280;
`;
