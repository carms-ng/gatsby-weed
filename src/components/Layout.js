import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

const SiteBorderStyles = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    max-width: 1440px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        {children}
      </SiteBorderStyles>
    </>
  )
}