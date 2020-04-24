import React from 'react';
import { ImgWrapper, Img } from './display-image.styles';

export default function DisplayImage({ imgUrl }) {
  console.log(imgUrl);

  return (
    <ImgWrapper>
      {imgUrl ? <Img id="inputImage" src={imgUrl} alt="A person" /> : null}
    </ImgWrapper>
  );
}
