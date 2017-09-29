import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Icon from './icon';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: currentcolor;
`;

const Nav = styled.nav`${space};`;

const List = styled.ul`
  display: flex;
  & > * + * {
    margin-left: 1rem;
  }
`;

export default props => (
  <Wrapper>
    <Logo
      viewBox="0 0 32 32"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="white"
    >
      <path d="M4 2 v24 a3,1 0 0 0 24,0 v-24 z" strokeWidth="2" fill="orange" />
      <path d="M4 6 a1,1 0 1 0 8,0 a1,1 0 1 0 8,0 a1,1 0 1 0 8,0" />
      <path d="M3 2 h26 v3 h-26 z" fill="currentcolor" />
      {/* <path d="M10 14 v8 a3,1 0 0 0 12,0 v-8 a8,1 0 0 1 -12,0" /> */}
      <circle cx="16" cy="19" r="5" />
    </Logo>
    <Nav ml={3}>
      <List>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </List>
    </Nav>
    <Nav ml={'auto'}>
      <List>
        <li>
          <Link to="https://twitter.com/_oliverjam" aria-label="Twitter">
            <Icon name="twitter" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/oliverjam" aria-label="Github">
            <Icon name="github" />
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/oliverjam" aria-label="Codepen">
            <Icon name="codepen" />
          </Link>
        </li>
      </List>
    </Nav>
  </Wrapper>
);
