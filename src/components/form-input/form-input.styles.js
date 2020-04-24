import styled, { css } from 'styled-components';

const inputColor = 'hsl(188, 50%, 21%)';
const labelColor = 'hsla(200, 42%, 15%, 1)';
const labelShrinkColor = 'hsla(200, 42%, 33%, 1)';
const fontSize = '2rem';
const paddingSize = '3rem';

const shrinkLabel = css`
  top: 0.5rem;
  font-size: 1.4rem;
  color: ${labelShrinkColor};
`;

export const FormInputWrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-evenly; */
  position: relative;
  width: 100%;
  /* display: inline-block; */
  padding: ${paddingSize};
  color: ${inputColor};
`;

export const Label = styled.label`
  font-size: ${fontSize};
  position: absolute;
  pointer-events: none;
  left: ${paddingSize};
  top: 2.2rem;
  color: ${labelColor};
  transition: 300ms ease all;
  ${(props) => console.log(props)};
  ${(props) => (props.shrink ? shrinkLabel : null)};
`;

export const Input = styled.input`
  height: 3rem;
  width: inherit;
  border: none;
  border-bottom: 1px solid ${labelColor};
  background: none;
  background-color: transparent;
  font-size: ${fontSize};
  color: ${inputColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }
`;
