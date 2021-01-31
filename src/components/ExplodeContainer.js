import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavSubpage from './NavSubpage';
import { initImagePosition, explodeAndDrift } from '../utils/effect';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';

const ExplodeStyles = styled.div`
  width: 100%;
  overflow: hidden;
  .explodee {
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`

export default function IndexContainer({children}) {
  useEffect(() => {
    const images = document.querySelectorAll(".explodee");
    initImagePosition(images);
  }, []);

  return (
    <ExplodeStyles onClick={explodeAndDrift}>
      <GlobalStyles />
      <Typography />
      <NavSubpage />
      {children}
    </ExplodeStyles>
  );
}