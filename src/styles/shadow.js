import { css } from 'styled-components';

export default size => css`
  box-shadow: ${size / 4}rem ${size / 4}rem 0 ${p => p.theme.colors.grey3};
`;
