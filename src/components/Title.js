import React from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';
import longShadow from '../styles/longShadow';

const Title = styled.h1`
  ${fontSize};
  color: orange;
  text-shadow: ${p => longShadow(p.theme.colors.grey[3], 20)};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 40rem;
  min-height: ${p => (p.big ? '33vh' : 'auto')};
  margin-top: ${p => (p.big ? '1rem' : '3rem')};
  margin-bottom: ${p => (p.big ? '1rem' : '3rem')};
`;

export default ({ id, big, size, children }) => (
  <Wrapper id={id} big={big}>
    <Title fontSize={size}>{children}</Title>
  </Wrapper>
);
