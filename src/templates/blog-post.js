import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Helmet from 'react-helmet';

const Container = styled.main`
  ${space};
  max-width: 40rem;
  max-width: 60ch;
  background-color: ${p => p.theme.colors.bg};
  border-radius: 2px;
`;

const Header = styled.header`
  & > h1 {
    font-size: 3rem;
    line-height: 1;
  }
`;

const Date = styled.small`font-size: 0.85rem;`;

const Markdown = styled.div`
  font-family: georgia, serif;
  font-size: 1.125em;
  margin-top: 1em;
  & > * + * {
    margin-top: 1em;
  }
  & h2,
  & h3,
  & h4,
  & h5 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  & blockquote {
    font-style: italic;
    padding-left: ${p => p.theme.space[2]};
    border-left: 0.5em solid ${p => p.theme.colors.primary};
  }
  & cite {
    font-style: normal;
    font-size: 0.85em;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark;
    const { title: siteTitle } = this.props.data.site.siteMetadata;
    return (
      <Container mt={[2, 3]} p={1}>
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
        tags
      }
    }
  }
`;
