import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --beige: #FFFAF3;
    --green: #006400;
    --green-dark: #1F381F;
    --pink: #f08080;
    --brown: #67504F;
    --rose: #AE6F84;
    --rose-light: #E0D0CA;
    --rose-dark: #956867;
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

  .title {
    padding: 0 1rem;
    position: relative;
    
    h2 {
      font-size: 4.5rem;
      color: var(--rose);
      position: relative;
      display: inline-block;
      z-index: 10;
    }
    
    .subtitle{
      float: left;
        display: inline-block;
        opacity: 0;
        z-index: 0;
        
      h3 {
        opacity: 0;
        font-size: 3rem;
        text-transform: uppercase;
        color: var(--brown);
        position: absolute;
        background: var(--rose-light);
        top: 20%;
        left: 0;
        padding: 0 1rem;  
      }
      .right {
        float: right;
        display: inline;
        left: auto;
        right: 0;
      }
    }

    :hover{
      .subtitle, h3 {
        opacity: 1;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 1000ms;
      }
    }
    
  }
`;

export default GlobalStyles;
