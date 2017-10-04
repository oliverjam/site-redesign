import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Helmet from 'react-helmet';

const Container = styled.main`
  ${space};
  max-width: 42rem;
  background-color: ${p => p.theme.colors.bg};
  border-radius: 2px;
`;

const Header = styled.header``;

const Date = styled.small`font-size: 0.85rem;`;

const Markdown = styled.div`
  margin-top: 1em;
  & > * + * {
    margin-top: 1em;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { title: siteTitle } = this.props.data.site.siteMetadata;
    return (
      <Container mt={[2, 4]} p={1}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>
        </Header>
        <Markdown dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
