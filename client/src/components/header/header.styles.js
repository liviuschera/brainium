import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  margin: 2rem 7vw;
`;

export const NavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 300ms linear;
  align-self: center;

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
