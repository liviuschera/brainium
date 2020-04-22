import React, { useState } from 'react';

import { GlobalStyle } from './globals.styles';
import Particles from 'react-particles-js';
import { ParticlesWrapper } from './app.styles';
import { config } from './particles.config';
import Header from './components/header/header.component';
import ContentContainer from './components/content-container/content-container.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import Rank from './components/rank/rank.component';

function App() {
  const [inputURL, setInputURL] = useState('');

  function onInputChange(event) {
    setInputURL(event.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <ParticlesWrapper>
        <Particles params={config} />
      </ParticlesWrapper>
      <Header />
      <ContentContainer>
        <Rank />
        <ImageLinkForm onInputChange={onInputChange} />
      </ContentContainer>
    </>
  );
}

export default App;
