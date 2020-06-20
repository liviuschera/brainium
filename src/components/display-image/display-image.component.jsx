import React from 'react';
import { ImgWrapper, Img } from './display-image.styles';
import BoundingBox from '../../components/bounding-box/bounding-box.component';

export default function DisplayImage({ coordsArray, imgUrl }) {
  return (
    <ImgWrapper>
      {imgUrl ? <Img id="inputImage" src={imgUrl} alt="A person" /> : null}
      {Object.keys(coordsArray).length > 0
        ? coordsArray.map((coords, index) => (
            <BoundingBox key={index} coords={coords}></BoundingBox>
          ))
        : null}
    </ImgWrapper>
  );
}
