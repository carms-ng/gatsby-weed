/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import styled from 'styled-components';

const LightboxStyles = styled.div`
  justify-content: center;
  align-items: center;
  z-index: 48;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  position: fixed;

  .modal-container {
    width: 100%;
    z-index: 49;
  }
  .lightbox__switch {
    display: grid;
    place-content: center center;
    z-index: 50;
    position: absolute;
    padding: 1rem;
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 50%;
    transform: rotate(45deg);
    color: var(--rose-light);
    line-height: 0.5;
    font-size: 3rem;
  }
`;

// prep element to fit it into the lightbox
export const prepLightBox = (elem) => {
  elem.style.maxHeight = '100%';
  elem.style.maxWidth = '100%';
  elem.style.objectFit = 'contain';
  document.querySelector(".lightbox__container").appendChild(elem);
}

export default function LightBox({ isLightBoxOpen, setLightBox }) {
  const closeLightBox = (e) => {
    // clear the container
    e.currentTarget.nextSibling.innerHTML = "";
    // close the lightBox;
    setLightBox(false);
  }

  return (
    <LightboxStyles className="lightbox" style={{ display: (isLightBoxOpen ? "flex" : "none") }}>
      <div className="lightbox__switch" onClick={closeLightBox}>+</div>
      <div className="lightbox__container" />
    </LightboxStyles>
  );
}