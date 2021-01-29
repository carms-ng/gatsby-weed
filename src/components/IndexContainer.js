import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import IndexColumn from './IndexColumn';
import NavSubpage from './NavSubpage';
import Footer from './Footer';

const IndexContainerStyles = styled.div`
  padding: 20px;
`;

export default function IndexContainer({ header, columns }) {
  return (
    <Layout greenBg>
      <NavSubpage />
      <IndexContainerStyles>
        <h1 className="pb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {header}
        </h1>
 
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {columns.map(column => <IndexColumn key={column.category} category={column.category} entries={column.entries} />)}
        </div>
      </IndexContainerStyles>
      <Footer />
    </Layout>
  );
}