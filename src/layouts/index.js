import React from 'react';
import Link from 'gatsby-link';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import theme from '../styles/theme';
import '../styles/global';

import Header from '../components/header';

const Container = styled.div`
  ${space};
  position: relative;
  min-height: 150vh;
  background-image: linear-gradient(transparent 100vh, #9f9f9f 100vh);
  overflow: hidden;
  @media (min-width: 60em) {
    ${'' /* background-image: linear-gradient(transparent 50rem, #777 50rem); */};
  }
  ${'' /* &::after {
    content: '';
    position: absolute;
    top: -10rem;
    left: -1rem;
    width: 0;
    height: 0;
    border: 28rem solid #777;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    z-index: -10;
    @media (min-width: 60em) {
      top: -20rem;
      left: 0rem;
      border-width: 35rem;
    }
  } */};
`;

const Background = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  height: 100%;
  z-index: -10;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container py={[2, 3]} px={[2, 3, 4]}>
          <Background viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="85 20 100 38 100 100 0 100 0 85" fill="#777" />
            <polygon points="60 15 100 60 100 100 0 100 0 65" fill="#9f9f9f" />
          </Background>
          <Header />
          {children()}
        </Container>
      </ThemeProvider>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
