import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

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
      <SiteBorderStyles>{children}</SiteBorderStyles>
    </>
  );
}
