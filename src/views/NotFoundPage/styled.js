import styled from 'styled-components';
import { device } from '../../components/common/styled';

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

export const Text = styled(Title)`

  font-size: 40px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;