import { NumProps } from '../../typings';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks';
import { selectNum, setActive, setNum } from '../../reduxStore/numSlice';
import { useRef } from 'react';

const Num = ({ num, fetchMovie }: NumProps) => {
  const numRef = useRef(null);
  const dispatch = useAppDispatch();
  const nums = useAppSelector(selectNum);
  // if number is clicked then change the background color
  const handleClick = () => {
    fetchMovie();

    if (num === 1) {
      dispatch(setNum(1));
      dispatch(setActive(true));
    } else if (num === 2) {
      dispatch(setNum(2));
      dispatch(setActive(true));
    } else if (num === 3) {
      dispatch(setNum(3));
      dispatch(setActive(true));
    } else if (num === 4) {
      dispatch(setNum(4));
      dispatch(setActive(true));
    } else if (num === 5) {
      dispatch(setNum(5));
      dispatch(setActive(true));
    }
  };
  return (
    <NumContainer>
      <Number
        onClick={() => {
          handleClick();
        }}
        ref={numRef}
        className={num === nums ? 'active' : ''}
      >
        {num}
      </Number>
    </NumContainer>
  );
};

export default Num;

const NumContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Number = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #9ca3af;
  position: relative;

  &.active {
    font-size: 16px;
    color: #fff;

    &::before {
      position: absolute;
      left: -20px;
      content: '';
      display: inline-block;
      width: 20px;
      height: 2px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
    }
  }
`;
