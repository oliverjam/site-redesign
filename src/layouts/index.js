import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { space } from 'styled-system';
import t from '../styles/theme';
import '../styles/global';

import Mountains from '../components/Mountains';
import Header from '../components/Header';

const Container = styled.div`
  ${space};
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const pages = ['/', '/blog', '/contact', '/thanks'];
    return (
      <ThemeProvider theme={t}>
        <Container pt={[2, 3]} pb={[4, 3]} px={[2, 3]}>
          {pages.includes(location.pathname) && <Mountains />}
          <Header current={location.pathname} />
          {children()}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Template;
