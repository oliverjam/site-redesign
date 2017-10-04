import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Icon from './icon';
import t from '../styles/theme';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: currentcolor;
`;

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3.5rem;
  display: flex;
  background-color: ${t.colors.bg};
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  @media (min-width: 40em) {
    position: initial;
    margin-left: 2rem;
    height: auto;
    box-shadow: none;
    background-color: transparent;
  }
`;

const Social = styled.nav`${space};`;

const List = styled.ul`
  display: flex;
  flex: 1;
`;

const Li = styled.li`
  ${space};
  flex: 1;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration-line: none;
  transition: background-color 0.2s;
  @media (min-width: 40em) and (hover: hover) {
    &:hover {
      color: inherit;
      text-decoration-line: underline;
    }
  }
  @media (max-width: 40em) and (hover: hover) {
    &:hover {
      background-color: ${t.colors.grey0};
    }
  }
`;

const IconLink = styled.a`
  &:hover {
    color: ${t.colors.primary};
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
      <path
        d="M4 2 v24 a3,1 0 0 0 24,0 v-24 z"
        strokeWidth="2"
        fill={t.colors.primary}
      />
      <path d="M4 6 a1,1 0 1 0 8,0 a1,1 0 1 0 8,0 a1,1 0 1 0 8,0" />
      <path d="M3 2 h26 v3 h-26 z" fill="currentcolor" />
      <path d="M10 14 v8 a3,1 0 0 0 12,0 v-8 a8,1 0 0 1 -12,0" />
      {/* <circle cx="16" cy="19" r="5" /> */}
    </Logo>
    <Nav>
      <List>
        <Li mr={[0, 2, 3]}>
          <NavLink to="#">Home</NavLink>
        </Li>
        <Li mr={[0, 2, 3]}>
          <NavLink to="#">About</NavLink>
        </Li>
        <Li mr={[0, 2, 3]}>
          <NavLink to="#">Blog</NavLink>
        </Li>
        <Li mr={[0, 2, 3]}>
          <NavLink to="#">Contact</NavLink>
        </Li>
      </List>
    </Nav>
    <Social ml={'auto'}>
      <List>
        <Li ml={2}>
          <IconLink href="https://twitter.com/_oliverjam" aria-label="Twitter">
            <Icon name="twitter" fill />
          </IconLink>
        </Li>
        <Li ml={2}>
          <IconLink href="https://github.com/oliverjam" aria-label="Github">
            <Icon name="github" fill />
          </IconLink>
        </Li>
        <Li ml={2}>
          <IconLink href="https://linkedin.com/oliverjam" aria-label="Codepen">
            <Icon name="codepen" />
          </IconLink>
        </Li>
      </List>
    </Social>
  </Wrapper>
);
