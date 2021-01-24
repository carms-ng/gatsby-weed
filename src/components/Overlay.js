import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--rose-light);
  }
`;

export default function Div() {
  return (
    <Overlay>
      <div className="overlay" />
    </Overlay>
  );
}
