import React from 'react';

import { GlobalStyle } from './globals.styles';
import Particles from 'react-particles-js';
import { ParticlesWrapper } from './app.styles';
import Header from './components/header/header.component';
import ContentContainer from './components/content-container/content-container.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import Rank from './components/rank/rank.component';

function App() {
  const config = {
    particles: {
      number: {
        value: 55,
        // density: {
        //   enable: true,
        //   value_area: 700,
        // },
      },
      size: {
        value: 5,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  };
  return (
    <>
      <GlobalStyle />
      <ParticlesWrapper>
        <Particles params={config} />
      </ParticlesWrapper>
      <Header />
      <ContentContainer>
        <Rank />
        <ImageLinkForm />
      </ContentContainer>
    </>
  );
}

export default App;
