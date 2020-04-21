import styled, { css } from 'styled-components';

const inputColor = 'hsl(188, 50%, 21%)';
const labelColor = 'hsl(188, 20%, 40%)';
const paddingSize = '2rem';

const shrinkLabel = css`
  top: 0;
  font-size: 1.2rem;
  color: ${inputColor};
`;

export const FormInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${paddingSize};
  color: ${inputColor};
`;

export const Label = styled.label`
  font-size: ${paddingSize};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: ${paddingSize};
  top: 1rem;
  color: ${labelColor};
  transition: 300ms ease all;
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${labelColor};
  background: none;
  background-color: transparent;
  font-size: ${paddingSize};
  color: ${inputColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }
`;
