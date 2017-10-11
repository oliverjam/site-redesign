import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';

const Contact = props => {
  const siteTitle = this.props.data.site.siteMetadata.title;
  return (
    <Container>
      <Helmet title={siteTitle} />
      <Title big>Contact</Title>
    </Container>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
