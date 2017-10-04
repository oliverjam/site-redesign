import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Section } from '../components/Blocks';
import Mountains from '../components/Mountains';
import PostSection from '../components/PostSection';

const longShadow = (col, len) =>
  Array.from(
    { length: len },
    (x, i) => `${i / 2 + 0.5}px ${i / 2 + 0.5}px ${col}`
  ).join(', ');

const Title = styled.h1`
  font-size: 4rem;
  color: orange;
  text-shadow: ${longShadow('#555', 20)};
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  max-width: 40rem;
  min-height: 50vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 40em) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
`;

const IntroSection = () => (
  <Wrapper>
    <Title>I'm a frontend developer in London.</Title>
  </Wrapper>
);

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const recentPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3);
    return (
      <Container>
        <Helmet title={siteTitle} />
        {/* <Mountains /> */}
        <IntroSection id="intro" />
        <PostSection posts={recentPosts} id="posts" />
      </Container>
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
