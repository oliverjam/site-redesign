import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';
import PostSection from '../components/PostSection';

class Blog extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const recentPosts = this.props.data.allMarkdownRemark.edges;
    return (
      <Container>
        <Helmet title={siteTitle} />
        <PostSection
          label="All posts"
          title="Blog"
          posts={recentPosts}
          id="posts"
        />
      </Container>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
