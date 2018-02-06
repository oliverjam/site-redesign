import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import BlogSection from '../components/BlogSection';

class Writing extends React.Component {
  render() {
    const siteTitle = `Blog | ${this.props.data.site.siteMetadata.title}`;
    const recentPosts = this.props.data.allMarkdownRemark.edges;
    return (
      <Container maxWidth="60ch">
        <Helmet title={siteTitle} />
        <BlogSection
          label="All posts"
          title="Writing"
          direction="column"
          posts={recentPosts}
          id="posts"
        />
      </Container>
    );
  }
}

export default Writing;

export const pageQuery = graphql`
  query WritingQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
