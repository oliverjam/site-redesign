import styled, { css } from 'styled-components';
import shadow from '../styles/shadow';

export const Form = styled.form`
  z-index: 0;
  & > * + * {
    margin-top: ${p => p.theme.space[3]};
  }
`;

export const FormRow = styled.div`
  & > * + * {
    margin-top: ${p => p.theme.space[3]};
  }
  @media (min-width: 40em) {
    display: flex;
    & > * + * {
      margin-top: 0;
      margin-left: ${p => p.theme.space[3]};
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${shadow(1, 2)};
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: -1rem;
  font-size: 0.65rem;
  font-weight: bold;
  color: ${p => p.theme.colors.textDark};
  transform: translate(0.5rem, 150%) scale(1.2);
  transform-origin: left center;
  transition: transform 0.25s ease-out, color 0.15s 0.1s ease-out;
  pointer-events: none;
`;

const inputStyles = css`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.85rem;
  background-color: ${p => p.theme.colors.grey[0]};
  &:focus,
  &:valid {
    & + ${Label} {
      transform: translate(0) scale(1);
    }
  }
  &:valid {
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;

export const Input = styled.input`${inputStyles};`;

export const TextArea = styled.textarea`
  ${inputStyles} resize: none;
  line-height: 1.4;
`;
