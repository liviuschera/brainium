import React, { useContext } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/current-user.context';

import { HeaderContainer, LogoContainer, NavLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/ai.svg';

export default function Header(props) {
   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
   // const location = useLocation();
   // const history = useHistory();
   // console.log(location);
   // console.log(history);

   // console.log(setCurrentUser);
   // console.log(props);
   //  console.log(currentUser);

   return (
      <HeaderContainer>
         <NavLink to="/">
            <LogoContainer>
               <Logo />
            </LogoContainer>
         </NavLink>
         {currentUser?.id ? (
            <NavLink
               to="/"
               onClick={() => {
                  setCurrentUser(null);
                  window.location.reload(false);
               }}
            >
               Sign Out
            </NavLink>
         ) : (
            <NavLink to="/signin">Sign In</NavLink>
         )}
      </HeaderContainer>
   );
}
