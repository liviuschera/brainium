import React from 'react';
import { ImgWrapper, Img } from './display-image.styles';
import BoundingBox from '../../components/bounding-box/bounding-box.component';

export default function DisplayImage({ coords, imgUrl }) {
  return (
    <ImgWrapper>
      {imgUrl ? <Img id="inputImage" src={imgUrl} alt="A person" /> : null}
      <BoundingBox coords={coords}></BoundingBox>
    </ImgWrapper>
  );
}
