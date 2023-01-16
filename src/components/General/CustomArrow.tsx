import { CustomArrowProps } from '../../typings';
import styled from 'styled-components';

export const CustomButtonGroupAsArrows = ({
  next,
  previous,
}: CustomArrowProps) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <PrevButton onClick={previous}>Prev</PrevButton>
      <NextButton onClick={next}>Next</NextButton>
    </div>
  );
};

const PrevButton = styled.button`
  background: #be123c;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;
`;

const NextButton = styled.button`
  background: #be123c;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;
`;
