import styled, { css } from 'styled-components';

const inputColor = 'hsl(188, 50%, 21%)';
const labelColor = 'hsla(200, 42%, 15%, 1)';
const labelShrinkColor = 'hsla(200, 42%, 33%, 1)';
const fontSize = '1.8rem';
const paddingSize = '2rem';

const shrinkLabel = css`
  top: 0.7rem;
  font-size: 1.3rem;
  color: ${labelShrinkColor};
`;

export const FormInputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${paddingSize};
  color: ${inputColor};
  &:last-child {
    background-color: red;
  }
`;

export const Label = styled.label`
  font-size: ${fontSize};
  font-weight: 300;
  position: absolute;
  pointer-events: none;
  left: ${paddingSize};
  top: 2.3rem;
  color: ${labelColor};
  transition: 300ms ease all;
  ${(props) => (props.shrink ? shrinkLabel : null)};
`;

export const Input = styled.input`
  /* font-family: 'Roboto Mono', sans-serif; */
  font-weight: 200;
  height: 3rem;
  width: inherit;
  border: none;
  border-bottom: 1px solid ${labelColor};
  background: none;
  background-color: transparent;
  font-size: 1.6rem;
  color: ${inputColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }
`;
