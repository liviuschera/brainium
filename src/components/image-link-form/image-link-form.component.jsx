import React from 'react';

import FormInput from '../form-input/form-input.component';
import { ImageLinkFormWrapper } from './image-link-form.styles';

export default function ImageLinkForm({ onInputChange }) {
  return (
    <ImageLinkFormWrapper>
      <FormInput
        label="Please enter an image URL"
        onInputChange={onInputChange}
      />
    </ImageLinkFormWrapper>
  );
}
