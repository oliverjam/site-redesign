import styled from 'styled-components';

export default styled.div`
  max-width: ${p => (p.maxWidth ? p.maxWidth : '60rem')};
  margin-left: auto;
  margin-right: auto;
`;
