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
  max-height: 50vh;
  overflow-y: scroll;
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
                In the artist book And Yet My Mask is Powerful, Basel Abbas and
                Ruanne Abou-Rahme try to trace back routes leading to the sites
                of destroyed Palestinian villages. They finally find their way
                by following the vegetation growing there: “wild fennel leads us
                to what remains of the village.” (2017)
              </SDescription>
              <SDescription>
                We learn to marvel in front of man-made edifices, towers,
                castles, homes. Yet, ultimately, they are bound to a slow dying
                process, slowly decaying, unless actively maintained, preserved,
                restored. We learn to value monuments made of stone, not only
                the building or the object in itself, but also as a proof of
                history. A history whose representation is fixed, frozen,
                singular, rather than constantly fluctuating and shifting, to be
                written and spoken from multiple points of entry. A first step
                towards decolonization, to move history into the plural form:
                histories.
              </SDescription>
              <SDescription>
                Going back to the wild fennel growing in the erased Palestinian
                villages, what remains after all marks of the constructions that
                once stood there are gone, is the resisting, persistant and
                persisting local vegetation. Nature remains the only testament
                of that history. It is our witness, there long before we came,
                and finding ways to remain long after we depart. Histories are
                carried through its flux, never finite, as it grows and dies and
                gets reborn again.
              </SDescription>
            </SModal>
          </SModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
