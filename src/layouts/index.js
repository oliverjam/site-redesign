import React from 'react';
import Link from 'gatsby-link';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import theme from '../styles/theme';
import '../styles/global';

import Header from '../components/header';

const Container = styled.div`
  ${space};
  min-height: 100vh;
`;

const Background = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  fill: none;
  z-index: -10;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container py={[2, 3]} px={[2, 3, 4]}>
          <Background viewBox="0 0 10 10" preserveAspectRatio="none">
            {/* <path d="M9 0 L-2 7 h13 v-10 z" fill="#9f9f9f" />
          <path d="M10 0 L-2 8 h12 z" fill="#777" /> */}
            <rect
              x="-4"
              y="7"
              width="10"
              height="10"
              transform="rotate(-45)"
              fill="#9f9f9f"
            />
            <rect
              x="-15.5"
              y="5"
              width="20"
              height="20"
              transform="rotate(-45)"
              fill="#777"
            />
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
