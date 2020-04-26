// ///////////////////////////
// IMPORTS
// ///////////////////////////

import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './globals.styles';
import { ParticlesWrapper } from './app.styles';
import Particles from 'react-particles-js';
import { config } from './particles.config';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignIn from './components/sign-in/sign-in.component';

// ///////////////////////////
// APP
// ///////////////////////////

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ParticlesWrapper>
        <Particles params={config} />
      </ParticlesWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </>
  );
}
