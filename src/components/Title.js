import React from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';

const longShadow = (col, len) =>
  Array.from(
    { length: len },
    (x, i) => `${i / 2 + 0.5}px ${i / 2 + 0.5}px ${col}`
  ).join(', ');

const Title = styled.h1`
  ${fontSize};
  color: orange;
  text-shadow: ${p => longShadow(p.theme.colors.grey3, 20)};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 40rem;
  min-height: ${p => (p.big ? '50vh' : '20vh')};
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 40em) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default ({ id, big, size, children }) => (
  <Wrapper id={id} big={big}>
    <Title fontSize={size}>{children}</Title>
  </Wrapper>
);
