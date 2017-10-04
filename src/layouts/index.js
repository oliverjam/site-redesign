import React from 'react';
import Link from 'gatsby-link';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import t from '../styles/theme';
import '../styles/global';

import Header from '../components/Header';

const Container = styled.div`
  ${space};
  position: relative;
  min-height: 100vh;
  background-image: ${p =>
    `linear-gradient(transparent 100vh, ${p.theme.colors.grey2} 100vh)`};
  overflow: hidden;
`;

const Background = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  height: 100%;
  z-index: -10;
  @media (min-width: 40em) {
    top: -15%;
    height: 125%;
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <ThemeProvider theme={t}>
        <Container pt={[2, 3]} pb={4} px={[2, 3, 4]}>
          <Background viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon
              points="60 15 100 60 100 100 0 100 0 65"
              fill={t.colors.grey1}
            />
            <polygon
              points="85 20 100 38 100 100 0 100 0 85"
              fill={t.colors.grey2}
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
