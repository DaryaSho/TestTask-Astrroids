import styled from 'styled-components';
import { device } from '../common/styled';

export const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Montserrat';
  font-size: 34px;
  @media ${device.mobileL} {
    height: 40px;
    font-size: 10px;
  }
`;

export const ArrowUp= styled.img.attrs({ src: 'right-arrow.svg' })`
  transform: rotate(270deg);
  width: 30px;
  height: 30px;
  margin-left: 5px;
  @media ${device.mobileL} {
    width: 10px;
    height: 10px;
  }
`;

export const ArrowDown = styled(ArrowUp)`
    transform: rotate(90deg);
`;