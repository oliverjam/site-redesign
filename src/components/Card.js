import styled from 'styled-components';
import { space, flexDirection } from 'styled-system';
import shadow from '../styles/shadow';

export default styled.div`
  ${space};
  ${flexDirection};
  position: relative;
  display: flex;
  background-color: ${p => p.theme.colors[p.background] || p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.grey[1]};
  border-radius: 2px;
  ${shadow(2)};
`;
