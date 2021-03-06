import styled from 'styled-components';
import { device } from '../../components/common/styled';

export const AsteroidsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  margin-top: 60px;
  @media ${device.tablet} {
    flex-direction: column;
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
  }
`;
