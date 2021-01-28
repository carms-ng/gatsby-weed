import React from 'react';
import styled from 'styled-components';
import IndexLink from '../components/IndexLink';

const IndexColumnStyles = styled.div`


`;

export default function IndexColumn({category, entries}) {
  return (
    <IndexColumnStyles className="col-span-1">
      <h3 className="py-8 uppercase">{category}</h3>
      {entries.map(entry => <IndexLink key={entry.name + entry.title} entry={entry} />)}
    </IndexColumnStyles>
  );
}