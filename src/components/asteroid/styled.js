import { Link as link} from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../common/styled';


export const Link = styled(link)`
  font-family: ${(props) => props.theme.fontFamily};
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  margin: 30px;
  border: 1px solid ${(props) => props.theme.textColor};
  padding: 20px;
  width: 350px;
  height: 250px;
  margin-bottom: 110px;
  :hover{
    transform: scale(1.2);
    opacity: (0,9);
  }
  @media ${device.mobileL} {
    width: 300px;
  }
`