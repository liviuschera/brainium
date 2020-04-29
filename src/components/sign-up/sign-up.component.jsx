import React, { useState } from 'react';

// import { SignUp } from './sign-up.styles';
import { SignInContainer, Title } from '../sign-in/sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default function SignUp() {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
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
      <Title>Sign up with your email and password</Title>
      <form method="post" onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          label="Name"
          value={state.name}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={state.email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={state.password}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm password"
          value={state.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </SignInContainer>
  );
}
