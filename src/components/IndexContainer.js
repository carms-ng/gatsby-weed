import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import IndexColumn from './IndexColumn';

const IndexContainerStyles = styled.div`
  padding: 100px 20px;

  h1 {

  }

`;


export default function IndexContainer({ header, content }) {
  return (
    <Layout>
      <IndexContainerStyles>
        <h1 className="pt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {header}
        </h1>
        {content.map(column => <IndexColumn column={column} />)}
      </IndexContainerStyles>
    </Layout>
  );
}