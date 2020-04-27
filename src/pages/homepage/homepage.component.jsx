// ///////////////////////////
// IMPORTS
// ///////////////////////////
import React, { useState } from 'react';

import {
  fetchClarifaiData,
  calculateFaceLocation,
} from '../../clarifai/clarifai.api';
import DisplayImage from '../../components/display-image/display-image.component';

import ContentContainer from '../../components/content-container/content-container.component';
import ImageLinkForm from '../../components/image-link-form/image-link-form.component';
import Rank from '../../components/rank/rank.component';

// import { HomepageDiv } from './homepage.styles';

// ///////////////////////////
// HOMEPAGE
// ///////////////////////////

export default function HomePage(props) {
  const [inputURL, setInputURL] = useState('');
  const [boundingBoxCoords, setBoundingBoxCoords] = useState([]);

  console.log(props);

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
