import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --beige: #FFFAF3;
    --green: #006400;
    --green-dark: #1F381F;
    --pink: #f08080;
    --brown: #67504F;
  }
  html {
    font-size: 16px;
    background-color: var(--beige);
  }
  body {
    font-size: 1rem;
  }
  section {  
    width: 91.666667%;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
