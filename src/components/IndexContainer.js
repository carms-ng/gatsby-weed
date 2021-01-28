import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import IndexColumn from './IndexColumn';

const IndexContainerStyles = styled.div`
  padding: 20px;

  /* 'tablet': '640px', */
  @media (min-width: 640px) {
    padding: 20px 10vw;
  }

  /* 'desktop': '1280px', */
  @media (min-width: 1280px) {
    padding: 20px 5rem;
  }
`;

export default function IndexContainer({ header, columns }) {
  return (
    <Layout>
      <IndexContainerStyles>
        <h1 className="pt-5 pb-12 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {header}
        </h1>
 
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12">
          {columns.map(column => <IndexColumn key={column.category} category={column.category} entries={column.entries} />)}
        </div>
      </IndexContainerStyles>
    </Layout>
  );
}