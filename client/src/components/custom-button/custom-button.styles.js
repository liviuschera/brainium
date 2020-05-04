import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = css`
  font-family: 'Roboto Mono', sans-serif;
  max-width: 15rem;
  min-width: max-content;
  height: 4rem;
  letter-spacing: 0.2rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  /* color: hsla(200, 42%, 15%, 1); */
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
  /* background-color: hsla(200, 42%, 33%, 0.2); */
  backdrop-filter: blur(0.5rem);
  transition: all 200ms;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`;

export const NormalButton = styled.button`
  ${buttonStyles}
`;

export const LinkButton = styled(Link)`
  ${buttonStyles}
  color: hsla(200, 42%, 15%, 1);
  font-weight: 300;
`;
