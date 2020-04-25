import React from 'react';

import { BoundingBoxDiv } from './bounding-box.styles';

export default function BoundingBox({ coords }) {
  return (
    <BoundingBoxDiv
      style={{
        top: coords.topRow,
        right: coords.rightCol,
        bottom: coords.bottomRow,
        left: coords.leftCol,
      }}
    />
  );
}
