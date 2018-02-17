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

  ::selection {
    background-color: ${t.colors.primary};
  }

  ::-moz-selection {
    background-color: ${t.colors.primary};
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
    color: ${t.colors.textLight};
    background-color: ${t.colors.bgDark};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    transition: text-decoration-color 0.1s;
    &:hover {
      text-decoration-color: ${t.colors.primary};
    }
  }

  ul {
    list-style: none;
  }

  label,
  input,
  textarea,
  button {
    display: block;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    background: none;
    border: none;
  }
`;
