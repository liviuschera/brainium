import React from 'react';

import { HeaderContainer, LogoContainer, NavLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/ai.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </HeaderContainer>
  );
}
