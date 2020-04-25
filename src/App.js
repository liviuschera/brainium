// ///////////////////////////
// IMPORTS

import React, { useState } from 'react';

import { GlobalStyle } from './globals.styles';
import Particles from 'react-particles-js';
import { ParticlesWrapper } from './app.styles';
import {
  fetchClarifaiData,
  calculateFaceLocation,
} from '../src/clarifai/clarifai.api';
import DisplayImage from '../src/components/display-image/display-image.component';

import { config } from './particles.config';
import Header from './components/header/header.component';
import ContentContainer from './components/content-container/content-container.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import Rank from './components/rank/rank.component';

// ///////////////////////////
// APP

export default function App() {
  const [inputURL, setInputURL] = useState('');
  const [boundingBoxCoords, setBoundingBoxCoords] = useState({});

  function onInputChange(event) {
    setInputURL(event.target.value);
  }

  async function onButtonSubmit(event) {
    event.preventDefault();
    const data = await fetchClarifaiData(inputURL);
    const faceLocation = calculateFaceLocation(data);
    setBoundingBoxCoords(faceLocation);
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
        <ImageLinkForm
          inputValue={inputURL}
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        <DisplayImage imgUrl={inputURL} coords={boundingBoxCoords} />
      </ContentContainer>
    </>
  );
}
