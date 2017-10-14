import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Icon from './icon';
import t from '../styles/theme';
import { tada } from '../styles/animation';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  position: relative;
  &:hover {
    animation: ${tada} 0.5s both;
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.2s 0.1s ease-out;
    z-index: -10;
  }
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
  padding: 0;
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
  text-decoration: none;
  transition: background-color 0.2s;
  @media (min-width: 40em) {
    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
  @media (max-width: 40em) and (hover: hover) {
    &:hover {
      color: inherit;
      background-color: ${t.colors.grey0};
    }
  }
`;

const IconLink = styled.a`
  display: block;
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

export default props => (
  <Wrapper>
    <LogoLink to="/">
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
    </LogoLink>
    <Nav>
      <List>
        <Li mr={[0, 2, 3]}>
          <NavLink to="#">About</NavLink>
        </Li>
        <Li mr={[0, 2, 3]}>
          <NavLink to="/blog">Blog</NavLink>
        </Li>
        <Li mr={[0, 2, 3]}>
          <NavLink to="/contact">Contact</NavLink>
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
