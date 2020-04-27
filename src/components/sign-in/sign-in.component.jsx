import React from 'react';

import { SignInContainer, Title } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default function SignIn() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('clicked');
  }

  return (
    <SignInContainer>
      <Title>Sign In with your email and password</Title>
      <form action="post" method="post" onSubmit={handleSubmit}>
        <FormInput type="text" label={'you@example.com'} />
        <FormInput type="password" label={'Please enter your password'} />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton isLink={true} to="/signup">
          Register
        </CustomButton>
      </form>
    </SignInContainer>
  );
}
