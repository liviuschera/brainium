import React from 'react';

import { NormalButton, LinkButton } from './custom-button.styles';

export default function CustomButton({
  isLink = false,
  children,
  ...otherProps
}) {
  return isLink ? (
    <LinkButton {...otherProps}>{children}</LinkButton>
  ) : (
    <NormalButton {...otherProps}>{children}</NormalButton>
  );
}
