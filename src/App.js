// ///////////////////////////
// IMPORTS
// ///////////////////////////

import React, { useState } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import CurrentUserContext from '../src/contexts/current-user.context';

import { GlobalStyle } from './globals.styles';
import { ParticlesWrapper } from './app.styles';
import ParticlesBg from 'particles-bg';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';

// ///////////////////////////
// APP
// ///////////////////////////

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return (
    <>
      <GlobalStyle />
      <ParticlesWrapper>
        <ParticlesBg color="#1199cc" type="cobweb" num={222} bg={true} />
      </ParticlesWrapper>
      <CurrentUserContext.Provider value={value}>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
          />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </CurrentUserContext.Provider>
    </>
  );
}
