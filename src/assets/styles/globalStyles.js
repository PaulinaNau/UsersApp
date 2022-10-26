import { createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
    font-family: 'Poppins', sans-serif;
}

a, button {
    font-family: 'Poppins', sans-serif;
}

`;
