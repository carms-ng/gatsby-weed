import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/ConditionedNatureContent';

export default function ConditionedNatureIndex() {
  return (
    <IndexContainer header="Conditioned Nature" columns={columns} />
  );
}
