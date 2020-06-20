import React from 'react';

import { BoundingBoxDiv } from './bounding-box.styles';

// Displays a rectangle around a face
export default function BoundingBox({ coords }) {
  // console.log(coords);

  return coords ? (
    <BoundingBoxDiv
      style={{
        top: coords.topRow,
        right: coords.rightCol,
        bottom: coords.bottomRow,
        left: coords.leftCol,
      }}
    />
  ) : null;
}
