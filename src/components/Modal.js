/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
  z-index: 48;
  max-width: 90vmin;
  max-height: 90vmin;
  width: 400px;
  height: 400px;
  background: var(--green-light);
  padding: 1rem ;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;

  .modal__switch {
    align-self: flex-end;
    display: grid;
    place-content: center center;
    z-index: 50;
    border-radius: 50%;
    transform: rotate(45deg);
    line-height: 0.5;
    font-size: 3rem;
    cursor: pointer;
  }

  p {
    padding: 1rem;
  }
`;

export default function Modal({ id, children, isVisible, setVisibility}) {
  const closeModal = () => {
    const updatedVisibility = Object.assign({}, isVisible)
    updatedVisibility[id] = false;
    setVisibility(updatedVisibility);
  }
  return (
    <ModalStyles 
      id={id} 
      style={{visibility: isVisible[id] ? 'visible' : 'hidden' }}
      
    >
      <div className="modal__switch" onClick={closeModal}>+</div>
      {children}
    </ModalStyles>
  );
}