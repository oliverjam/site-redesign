import React from 'react';
import styled, { css } from 'styled-components';
import { space, flexDirection } from 'styled-system';
import Link from 'gatsby-link';
import Title from './Title';
import { P } from './Blocks';

const Posts = styled.div`
  ${space};
  ${flexDirection};
  display: flex;
  max-width: 60rem;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.grey0};
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Card = styled.article`
  ${space};
  &:first-child {
    margin-top: 0;
    margin-left: 0;
  }
`;

const PostLink = styled(Link)`
  transition: background-color 0.2s ease-out;
  text-decoration: none;
  &:hover {
    color: inherit;
    & h3 {
      text-decoration: none;
    }
  }
  @media (min-width: 40em), (hover: hover) {
    &:hover {
      background-color: ${p => p.theme.colors.grey0};
      & h3 {
        color: inherit;
        text-decoration: underline;
      }
    }
  }
`;

const PostSection = ({ label, title, posts }) => (
  <section aria-label={label}>
    {title && <Title>{title}</Title>}
    <Posts
      flexDirection={posts.length <= 3 ? ['column', 'column', 'row'] : 'column'}
      maxWidth={'60rem'}
      mx={'auto'}
    >
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path;
          return (
            <PostLink to={post.node.frontmatter.path}>
              <Card p={[2, 3]} key={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>{post.node.frontmatter.date}</small>
                <P
                  mt={1}
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </Card>
            </PostLink>
          );
        }
      })}
    </Posts>
  </section>
);

export default PostSection;
