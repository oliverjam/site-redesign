import { injectGlobal } from 'styled-components';
import t from './theme';

injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  @media (min-width: 40em) {
    html {
      font-size: 125%;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${t.colors.grey3};
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.1;
  }

  a {
    color: inherit;
    text-decoration-skip: ink;
    text-decoration-line: underline;
    text-decoration-color: ${t.colors.primary};
    transition: color 0.2s;
    &:hover {
      color: ${t.colors.primary};
    }
  }

  ul,
  ol {
    padding-left: 1em;
  }

  ul {
    list-style: none;
  }
`;
