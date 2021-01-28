import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/PlantsWitnessContent';

export default function PlantsWitnessIndex() {
  return (
    <IndexContainer header="Plant as Witnesses" columns={columns} />
  );
}
