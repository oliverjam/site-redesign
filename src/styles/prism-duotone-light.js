import { css } from 'styled-components';
import t from './theme';

export default css`
  code,
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
      'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
      'Courier New', Courier, monospace;
    font-size: 0.85rem;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    color: #fff;
    background-color: #1c1917;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code::-moz-selection,
  code ::-moz-selection {
    text-shadow: none;
    background: #110f0e;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code::selection,
  code ::selection {
    text-shadow: none;
    background: #110f0e;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  code {
    color: ${t.colors.primary};
    padding: 0.2em;
  }

  pre > code {
    color: #fff;
    padding: 0;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #ccc;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #bd93f9;
  }

  .token.property,
  .token.function {
    color: #66d9ef;
  }

  code.language-javascript,
  .token.attr-name {
    color: #50fa7b;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.string,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule,
  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #ff79c6;
  }

  .token.placeholder,
  .token.variable {
    color: #93abdc;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #2d2006;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #ccc;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #50fa7b;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
  .line-highlight {
    background: rgba(45, 32, 6, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(45, 32, 6, 0.2) 70%,
      rgba(45, 32, 6, 0)
    );
    background: linear-gradient(
      to right,
      rgba(45, 32, 6, 0.2) 70%,
      rgba(45, 32, 6, 0)
    );
  }
`;
