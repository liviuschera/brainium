// ///////////////////////////
// IMPORTS
// ///////////////////////////
import React, { useState, useContext } from 'react';

import {
  fetchClarifaiData,
  calculateFaceLocation,
} from '../../clarifai/clarifai.api';
import DisplayImage from '../../components/display-image/display-image.component';

import ContentContainer from '../../components/content-container/content-container.component';
import ImageLinkForm from '../../components/image-link-form/image-link-form.component';
import Rank from '../../components/rank/rank.component';
import CurrentUserContext from '../../contexts/current-user.context';
import { postData } from '../../utils/connect-to-api';

// import { HomepageDiv } from './homepage.styles';

// ///////////////////////////
// HOMEPAGE
// ///////////////////////////

export default function HomePage() {
  const [inputURL, setInputURL] = useState('');
  const [boundingBoxCoords, setBoundingBoxCoords] = useState([]);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // console.log(props);

  function onInputChange(event) {
    setInputURL(event.target.value);
  }

  async function onButtonSubmit(event) {
    event.preventDefault();
    const data = await fetchClarifaiData(inputURL);
    const faceLocation = calculateFaceLocation(data);
    setBoundingBoxCoords(faceLocation);

    if (currentUser?.id) {
      const updatedUser = await postData(
        'http://localhost:5000/image',
        { ...currentUser },
        'PUT'
      );
      setCurrentUser(updatedUser);
    }
  }

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
