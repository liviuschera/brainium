import React from 'react';

import { FormInputWrapper, Input, Label } from './form-input.styles';

export default function FormInput({ label }) {
  console.log(label);

  return (
    <FormInputWrapper>
      <Input />
      <Label>{label}</Label>
    </FormInputWrapper>
  );
}
