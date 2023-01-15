import styled from 'styled-components';
import { FaSearch as SearchIcon } from 'react-icons/fa';

const Search = () => {
  return (
    <Container>
      <Input type="text" placeholder="What do you want to watch?" />
      <SearchIconCtn>
        <SearchIcon
          style={{
            color: '#ffffff',
            width: '12px',
            height: '12px',
          }}
        />
      </SearchIconCtn>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  height: 36px;
  gap: 10px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  background: transparent;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIconCtn = styled.div`
  position: absolute;
  right: 10px;
`;
