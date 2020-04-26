import React from 'react';

import { SignInContainer, Title } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';

export default function SignIn() {
  return (
    <SignInContainer>
      <Title>Sign In with your email and password</Title>
      <form action="post" method="post">
        <FormInput type="text" label={'you@example.com'} />
        <FormInput type="password" label={'Please enter your password'} />
      </form>
    </SignInContainer>
  );
  // return <h1>Singn In Page</h1>;
}
