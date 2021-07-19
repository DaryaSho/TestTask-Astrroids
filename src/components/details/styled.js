import styled from 'styled-components';
import { device } from '../common/styled';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;;
  justify-content: space-evenly;
  padding: 15px;
`;


export const Text = styled.p`
text-decoration: none;
font-family: ${(props) => props.theme.fontFamily};
color: ${(props) => props.theme.textColor};
font-size: 30px;
margin-top: 90px;
@media ${device.tablet} {
    font-size: 20px;
  }
`;

export const Title = styled.p`
  text-decoration: none;
  font-size: 60px;
  margin-top: 60px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.textColor};
  text-align: center;
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
  }
`;

export const Diameter = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.textColor};
  font-size: 30px;
  margin-top: 90px;
  @media ${device.tablet} {
    font-size: 20px;
  }
`;