import styled, { css } from 'styled-components';
import t from '../styles/theme';

export const Form = styled.form`
  z-index: 0;
`;

export const Row = styled.div`
  & + & {
    margin-top: ${t.space[3]};
  }
  & > * + * {
    margin-top: ${t.space[3]};
  }
  @media (min-width: 40em) {
    display: flex;
    & > * + * {
      margin-top: 0;
      margin-left: ${t.space[3]};
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: ${t.fontSizes[0]};
  font-weight: bold;
  line-height: 1;
  color: ${t.colors.grey[3]};
  transform-origin: left center;
  transition: transform 0.2s ease-out;
  pointer-events: none;
`;

const inputStyles = css`
  width: 100%;
  height: 2.75rem;
  padding: 1rem;
  font-size: 0.85rem;
  background-color: ${t.colors.grey[0]};
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  outline: none;
  @media screen and (min-width: 40em) {
    border-radius: 4px;
  }
  &:focus,
  &:valid {
    & + ${Label} {
      transform: translate(-1rem, -250%) scale(0.9);
    }
  }
`;

export const Input = styled.input`
  ${inputStyles};
`;

export const TextArea = styled.textarea`
  ${inputStyles};
  height: auto;
  resize: none;
  line-height: 1.4;
`;
