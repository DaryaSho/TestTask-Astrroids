import styled from 'styled-components';
import { device } from '../common/styled';

export const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Montserrat';
  font-size: 54px;
  @media ${device.tablet} {
    font-size: 34px;
  }
  @media ${device.mobileL} {
    font-size: 25px;
  }
`;

export const ArrowBack = styled.img`
  width: 70px;
  height: 70px;
  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }
  @media ${device.mobileL} {
    width: 30px;
    height: 30px;
  }
`;

export const ArrowForward = styled(ArrowBack)`
    transform: rotate(180deg);
`;
