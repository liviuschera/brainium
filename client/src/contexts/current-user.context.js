import { createContext } from 'react';

const CurrentUserContext = createContext({
  currentUser: false,
  setCurrentUser: () => {},
});
export default CurrentUserContext;
