import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';
import PostSection from '../components/PostSection';

class BlogIndex extends React.Component {
  render() {
    console.log(this.props.data);
    const siteTitle = this.props.data.site.siteMetadata.title;
    const recentPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3);
    return (
      <Container>
        <Helmet title={siteTitle} />
        {/* <Mountains /> */}
        <Title big>I'm a frontend developer in London.</Title>
        <PostSection label="Recent Posts" posts={recentPosts} id="posts" />
      </Container>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
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
