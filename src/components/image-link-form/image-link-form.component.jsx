import React from 'react';

import FormInput from '../form-input/form-input.component';
import { ImageLinkFormWrapper } from './image-link-form.styles';
import CustomButton from '../../components/custom-button/custom-button.component';

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <ImageLinkFormWrapper action="post">
      <FormInput
        label="Please enter an image URL"
        onInputChange={onInputChange}
      />
      <CustomButton type="submit" onClick={onButtonSubmit}>
        Detect
      </CustomButton>
    </ImageLinkFormWrapper>
  );
}
