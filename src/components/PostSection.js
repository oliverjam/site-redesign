import React from 'react';
import styled, { css } from 'styled-components';
import { space, width, flexDirection } from 'styled-system';
import Link from 'gatsby-link';
import { Section, P } from './Blocks';

const Posts = styled.div`
  display: flex;
  ${width};
  ${space};
  ${flexDirection};
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Post = styled.article`
  ${space};
  &:first-child {
    margin-top: 0;
    margin-left: 0;
  }
`;

const PostLink = styled(Link)`
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: #eee;
    text-decoration: none;
    & h3 {
      text-decoration: underline;
    }
  }
`;

const PostSection = ({ posts }) => (
  <Section mx={[2, 3, 4]} aria-label="Recent Posts">
    <Posts flexDirection={['column', 'column', 'row']}>
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path;
          return (
            <PostLink to={post.node.frontmatter.path}>
              <Post p={[2, 3]} key={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>{post.node.frontmatter.date}</small>
                <P
                  mt={[1, 2]}
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </Post>
            </PostLink>
          );
        }
      })}
    </Posts>
  </Section>
);

export default PostSection;
