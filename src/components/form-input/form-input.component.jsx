import React from 'react';

import { FormInputWrapper, Input, Label } from './form-input.styles';

export default function FormInput({ value, label, onInputChange }) {
  return (
    <FormInputWrapper>
      <Input onChange={onInputChange} value={value} />
      {label ? <Label shrink={value}>{label}</Label> : null}
    </FormInputWrapper>
  );
}
