import React from 'react';

import { Button } from './custom-button.styles';

export default function CustomButton({ children, ...otherProps }) {
  return <Button {...otherProps}>{children}</Button>;
}
