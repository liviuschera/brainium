import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  color: hsl(0, 11%, 22%);

}

html {
   /* This defines what 1rem is */
   /* 1 rem = 10px; 10px/16px = 62.5% */
   font-size: 62.5%;
   margin: 0;
	width: 100%;
	height: 100vh;
	background: linear-gradient(-45deg, #9CECFB, #65C7F7,  #EC6EAD ,#23a6d5  );
	background-size: 400% 400%;
	animation: gradientBG 10s ease infinite;
}

body {
   font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	  font-weight: 400;
 	 font-size: 1.6rem;
 	 line-height: 2;
 	/* background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%); */

   box-sizing: border-box;
   /* width: 100%; */
	position: absolute;
	text-align: center;
}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;
