import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
color: hsl(188, 90%, 10%);
}

html {
   /* This defines what 1rem is */
   /* 1 rem = 10px; 10px/16px = 62.5% */
   font-size: 62.5%;

	background: linear-gradient(90deg,  #65C7F7 ,#23a6d5  );
	background-size: 100vw 100vh;
  /* color: hsl(188, 90%, 10%); */
}

body {
   font-family: 'Roboto Mono', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	  font-weight: 200;
 	 font-size: 1.8rem;
	  line-height: 2;
  box-sizing: border-box;
}

.message-box {
  color: white;
  font-size: 13px;
  box-shadow: 0 0.5rem 2rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 2rem;
    &.error{
      background-color: rgba(255,0,0, 0.3);
    }
    &.success{
      background-color: rgba(0,199,0, 0.3);
    }

}
`;
