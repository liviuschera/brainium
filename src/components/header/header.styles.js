import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  padding: 1.3rem;

  /* background-color: hsla(188, 21%, 11%, 0.3); */
`;

export const NavLink = styled.a`
  color: hsl(188, 90%, 10%);
  cursor: pointer;
  transition: all 300ms linear;
  &:hover {
    color: hsl(188, 100%, 90%);
  }
`;

export const LogoContainer = styled.div`
  width: 5rem;
  height: 100%;
  transition: all 300ms;
  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
