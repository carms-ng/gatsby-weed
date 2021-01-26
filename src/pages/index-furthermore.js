import React from 'react';
import IndexLayout from '../components/IndexLayout';
import Content from '../assets/contents/FurthermoreContent';
import IndexColumn from '../components/IndexColumn';

export default function SubPageSeven() {
  return (
    <IndexLayout>
      <h1>Furthermore</h1>
      {Content.map(column => <IndexColumn column={column} />)}
    </IndexLayout>
  );
}
