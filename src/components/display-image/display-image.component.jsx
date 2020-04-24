import React from 'react';
import { ImgWrapper } from './display-image.styles';

export default function DisplayImage(url) {
  console.log(url);

  return (
    <ImgWrapper>
      <img src={url} alt="A person" />
    </ImgWrapper>
  );
}
