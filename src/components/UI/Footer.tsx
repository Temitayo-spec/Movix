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
      <FooterText>
        <p>© 2021 Movix</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #000000;
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

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
