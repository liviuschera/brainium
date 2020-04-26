import React from 'react';

import { Link } from 'react-router-dom';
import { HeaderContainer, NavLink, LogoContainer } from './header.styles';
import { ReactComponent as Logo } from '../../assets/ai.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>
      <Link to="/signin">
        <NavLink>Sign In</NavLink>
      </Link>
    </HeaderContainer>
  );
}
