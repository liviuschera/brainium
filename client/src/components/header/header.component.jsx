import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/current-user.context';

import { HeaderContainer, LogoContainer, NavLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/ai.svg';

export default function Header(props) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);
  console.log(currentUser);
  console.log(setCurrentUser);
  console.log(props);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </NavLink>
      {currentUser ? (
        <NavLink to="/" onClick={() => setCurrentUser(false)}>
          Sign Out
        </NavLink>
      ) : (
        <NavLink to="/signin">Sign In</NavLink>
      )}
    </HeaderContainer>
  );
}
