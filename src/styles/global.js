import { injectGlobal } from 'styled-components';

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
    ${'' /* font-size: calc(1rem + 0.25vw); */}
  }

  @media (min-width: 40em) {
    html {
      font-size: 125%;
    }
  }

  body {
    font-family: BlinkMacSystemFont;
    color: #333;
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
    text-decoration: none;
    text-decoration-skip: ink;
    text-decoration-color: orange;
    &:hover {
      text-decoration-line: underline;
    }
  }

  ul {
    list-style: none;
  }
`;
