import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  /* color: hsl(0, 11%, 22%); */

}

html {
   /* This defines what 1rem is */
   /* 1 rem = 10px; 10px/16px = 62.5% */
   font-size: 62.5%;

	background: linear-gradient(90deg,  #65C7F7 ,#23a6d5  );
	background-size: 100vw 100vh;
}

body {
   font-family: 'Roboto Mono', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	  font-weight: 200;
 	 font-size: 1.8rem;
	  line-height: 2;
  box-sizing: border-box;
}
`;
