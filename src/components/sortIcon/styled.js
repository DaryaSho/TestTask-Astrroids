import styled from 'styled-components';
import { device } from '../common/styled';

export const ArrowUp = styled.img.attrs({ src: 'right-arrow.svg' })`
  transform: rotate(270deg);
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;

export const ArrowDown = styled(ArrowUp)`
    transform: rotate(90deg);
`;