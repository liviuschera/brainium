import React from 'react';

import { FormInputWrapper, Input, Label } from './form-input.styles';

export default function FormInput({ label, onInputChange }) {
  console.log(onInputChange);

  return (
    <FormInputWrapper>
      <Input onChange={onInputChange} />
      <Label>{label}</Label>
    </FormInputWrapper>
  );
}
