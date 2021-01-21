import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --beige: #FFFAF3;
    --dark-green: #006400;
    --pink: #f08080;
  }
  html {
    font-size: 16px;
    background-color: var(--beige);
  }
  body {
    font-size: 1rem;
  }
  
`;

export default GlobalStyles;
