import { createGlobalStyle } from 'styled-components';

import din from '../assets/fonts/din_alternate_bold-webfont.woff';
import ms from '../assets/fonts/monetasans-black-webfont.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: "MonetaSans";
    src: url(${ms});
  }
  @font-face {
    font-family: "Din";
    src: url(${din});
  }
  html {
    font-family: Din, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--green-dark);
  }
  p, li {
    letter-spacing: 0.05em;
  }
  h1 {
    font-family: MonetaSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--green);
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
`;

export default Typography;
