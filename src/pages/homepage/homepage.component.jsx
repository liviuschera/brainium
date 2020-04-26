// ///////////////////////////
// IMPORTS
// ///////////////////////////
import React, { useState } from 'react';

import {
  fetchClarifaiData,
  calculateFaceLocation,
} from '../../clarifai/clarifai.api';
import DisplayImage from '../../components/display-image/display-image.component';

import Header from '../../components/header/header.component';
import ContentContainer from '../../components/content-container/content-container.component';
import ImageLinkForm from '../../components/image-link-form/image-link-form.component';
import Rank from '../../components/rank/rank.component';

import { HomepageDiv } from './homepage.styles';

// ///////////////////////////
// HOMEPAGE
// ///////////////////////////

export default function HomePage(params) {
  const [inputURL, setInputURL] = useState('');
  const [boundingBoxCoords, setBoundingBoxCoords] = useState([]);

  function onInputChange(event) {
    setInputURL(event.target.value);
  }

  async function onButtonSubmit(event) {
    event.preventDefault();
    const data = await fetchClarifaiData(inputURL);

    const faceLocation = calculateFaceLocation(data);
    setBoundingBoxCoords(faceLocation);
  }
  // console.log(boundingBoxCoords);

  return (
    <>
      <Header />
      <ContentContainer>
        <Rank />
        <ImageLinkForm
          inputValue={inputURL}
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        <DisplayImage imgUrl={inputURL} coordsArray={boundingBoxCoords} />
      </ContentContainer>
    </>
  );
}
