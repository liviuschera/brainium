import React from 'react';

import { FormInputWrapper, Input, Label } from './form-input.styles';

export default function FormInput({ ...props }) {
  // export default function FormInput({ value, label, onInputChange }) {
  return (
    <FormInputWrapper>
      <Input {...props} />
      {/* <Input onChange={onInputChange} value={value} /> */}
      {props.label ? <Label shrink={props.value}>{props.label}</Label> : null}
    </FormInputWrapper>
  );
}
