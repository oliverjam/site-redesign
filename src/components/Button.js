import styled from 'styled-components';
import { space, width } from 'styled-system';
import longShadow from '../styles/longShadow';
import shadow from '../styles/shadow';

export default styled.button`
  ${space};
  ${width};
  position: relative;
  background-color: ${p => p.theme.colors.grey0};
  color: ${p => p.theme.colors.textDark};
  transition: background-color 0.2s;
  ${shadow(1)};
  &:hover {
    background-color: ${p => p.theme.colors.primary};
  }
`;
