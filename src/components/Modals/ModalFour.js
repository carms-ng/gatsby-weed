import * as React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const SModalOverlay = styled.div`
  background-color: #999999;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 25%;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 25%;
  width: 100%;
  z-index: 1000;
`;

const SModal = styled.div`
  align-items: center;
  background: var(--green-light);
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  margin: 1.875rem;
  max-width: 500px;
  position: relative;
  z-index: 100;
`;

const SButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  padding: 0.8rem 0.8rem 0;
  font-family: MonetaSans;
  margin-left: auto;
`;

const SDescription = styled.span`
  color: var(--green-dark);
  align-items: center;
  padding: 0 1.5rem 1.5rem;
`;

const Modal = ({ isVisible, hideModal, modals }) => {
  return isVisible
    ? createPortal(
        <React.Fragment>
          {/* <SModalOverlay /> */}
          <SModalWrapper
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role="dialog"
          >
            <SModal>
              <SButton onClick={hideModal}>X</SButton>
              <SDescription>
                Plants opportunistically reclaim spaces. Thinking through this
                notion, plants become active survivors in urbanity—animate
                matter that thrives and adapts in artificial habitats.
              </SDescription>
            </SModal>
          </SModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
