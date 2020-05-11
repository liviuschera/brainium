import React, { useState } from 'react';

import { SignInContainer, Title } from '../sign-in/sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { postData } from '../../utils/connect-to-api';

export default function SignUp(props) {
  console.log(props);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await postData('http://localhost:5000/signup', state);
      props.history.push('/');
      // console.log(response);
    } catch (error) {
      console.error('Sign-up client error: ', error);
    }
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
          name="firstName"
          type="text"
          label="First Name"
          value={state.firstName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="lastName"
          type="text"
          label="Last Name"
          value={state.lastName}
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
