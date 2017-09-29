import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Section } from '../components/Blocks';
import PostSection from '../components/PostSection';

const IntroSection = () => (
  <Section mx={[2, 3, 4]} py={4} my={4}>
    <h1>Oli is a frontend developer in London.</h1>
  </Section>
);

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={siteTitle} />
        <IntroSection id="intro" />
        <PostSection posts={posts} id="posts" />
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

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
