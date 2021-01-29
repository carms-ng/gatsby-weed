import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavSubpage from './NavSubpage';
import { initImagePosition, explodeAndDrift } from '../utils/effect';

const ExplodeStyles = styled.div`
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
      <NavSubpage />
      {children}
    </ExplodeStyles>
  );
}