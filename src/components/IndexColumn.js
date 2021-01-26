import React from 'react';
import IndexLink from '../components/IndexLink';

export default function IndexColumn({column}) {
  return (
    <>
      <h1>{column.category}</h1>
      {column.links.map(link => <IndexLink link={link} />)}
    </>
  );
}