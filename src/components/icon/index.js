import React from 'react';
import styled from 'styled-components';
import paths from './paths';

const Icon = styled.svg`
  width: ${p => p.size || p.width || '1rem'};
  height: ${p => p.size || p.height || '1rem'};
  fill: currentcolor;
  stroke: currentcolor;
  vertical-align: middle;
`;

export default ({ size, width, height, name }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fillRule="evenodd"
    clipRule="evenodd"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke-miterlimit="1.414"
  >
    <path d={paths[name]} fillRule="nonzero" />
  </Icon>
);
