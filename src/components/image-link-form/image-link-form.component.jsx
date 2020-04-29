import React from 'react';

import FormInput from '../form-input/form-input.component';
import { ImageLinkFormWrapper } from './image-link-form.styles';
import CustomButton from '../../components/custom-button/custom-button.component';

export default function ImageLinkForm({
  inputValue,
  onInputChange,
  onButtonSubmit,
}) {
  return (
    <ImageLinkFormWrapper action="post">
      <FormInput
        name="inputURL"
        type="text"
        value={inputValue}
        label="Please enter an image URL"
        onChange={onInputChange}
        required
      />
      <CustomButton type="submit" onClick={onButtonSubmit}>
        Detect
      </CustomButton>
    </ImageLinkFormWrapper>
  );
}
