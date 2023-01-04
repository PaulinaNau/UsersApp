import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    font-family: 'Poppins', sans-serif;
}

button {
    font-family: 'Poppins', sans-serif;
}

a { 
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: inherit,
 } 


`;
