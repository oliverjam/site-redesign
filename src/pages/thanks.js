import React from 'react';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Title from '../components/Title';
import Card from '../components/Card';

class Thanks extends React.Component {
  render() {
    const siteTitle = `Contact | ${this.props.data.site.siteMetadata.title}`;
    return (
      <Container maxWidth={'60ch'}>
        <Helmet title={siteTitle} />
        <section>
          <Title>Get in touch</Title>
          <Card flexDirection={'column'} mx={'auto'} px={[2, 3]} py={3}>
            <p>Thanks! I'll try to get back to you soon</p>
          </Card>
        </section>
      </Container>
    );
  }
}

export default Thanks;

export const pageQuery = graphql`
  query ThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
