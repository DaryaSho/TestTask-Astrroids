import styled from 'styled-components';
import { device } from '../common/styled';

export const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.textColor};
  font-size: 54px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.footerBackgroundColor};
  width: 100%;
  @media ${device.tablet} {
    font-size: 34px;
  }
  @media ${device.mobileL} {
    font-size: 25px;
  }
`;
