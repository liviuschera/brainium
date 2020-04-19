import React from 'react';
import { HeaderContainer, NavLink, LogoContainer } from './header.styles';
import { ReactComponent as Logo } from '../../assets/ai.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavLink>Sign In</NavLink>
    </HeaderContainer>
  );
}
