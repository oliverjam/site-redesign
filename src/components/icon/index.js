import React from 'react';
import styled from 'styled-components';
import paths from './paths';

const Icon = styled.svg`
  width: ${p => p.size || p.width || '1.5rem'};
  height: ${p => p.size || p.height || '1.5rem'};
  vertical-align: middle;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

export default ({ size, width, height, name, fill }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill={fill ? 'currentcolor' : 'none'}
    stroke={!fill ? 'currentcolor' : 'none'}
  >
    <path d={paths[name]} />
  </Icon>
);
