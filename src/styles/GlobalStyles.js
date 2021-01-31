import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --beige: #FFFAF3;
    --green: #006400;
    --green-dark: #1F381F;
    --green-light: #CCD1B8;
    --pink: #f08080;
    --brown: #67504F;
    --rose: #AE6F84;
    --rose-light: #E0D0CA;
    --rose-dark: #956867;
  }
  html {
    font-size: 16px;
  }
  body {
    font-size: 1.15rem;
    background-color: ${props => (props.greenBg ? '#fcfcf6' : '#fff')};
  }

  @media (max-width: 768px){
    body {
      font-size: 1rem;
    }
  }

  section {  
    width: 91.666667%;
    margin: 0 auto;
  }

  .title {
    padding: 0 1rem;
    position: relative;
    max-width: min-content;
    height: min-content;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;

    
    h2 {
      font-size: 4.5rem;
      color: var(--rose);
      display: inline-block;
    }

    h3 {
      opacity: 0;
      font-size: 3rem;
      text-transform: uppercase;
      color: var(--brown);

      line-height: 100%;
      position: absolute;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;

      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 1000ms;

      :hover {
        opacity: 1;
      }
    }

    // Set width relative parent div for hover background
    h3.title-width {
      visibility: hidden;
      height: 0px;
      position: relative;
      color: red;    
      pointer-events: none;
    } 
    
    :hover {
      opacity: 1;
      background: var(--rose-light);
    }
    
  }
  .img-container {
    position: relative;
    width: 100%;
  }

  .img-container:hover .overlay {
    opacity: 50%;
  }
  
`;

export default GlobalStyles;
