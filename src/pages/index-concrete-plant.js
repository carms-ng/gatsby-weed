import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/ConcretePlantContent';

export default function ConcretePlantIndex() {
  return (
    <IndexContainer header="Concrete & Plant Relationships" columns={columns} />
  );
}
