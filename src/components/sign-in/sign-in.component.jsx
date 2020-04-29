import React, { useState } from 'react';

import { SignInContainer, Title } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default function SignIn() {
  const [state, setState] = useState({ email: '', password: '' });

  function handleSubmit(event) {
    event.preventDefault();
    console.log('clicked');
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setState((prevState) => {
      const newState = { ...prevState, ...{ [name]: value } };
      return newState;
    });
  }

  return (
    <SignInContainer>
      <Title>Sign In with your email and password</Title>
      <form action="post" method="post" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          onChange={handleInputChange}
          value={state.email}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          onChange={handleInputChange}
          value={state.password}
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton isLink={true} to="/signup">
          Register
        </CustomButton>
      </form>
    </SignInContainer>
  );
}
