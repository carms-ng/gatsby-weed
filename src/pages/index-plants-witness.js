import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/PlantsWitnessContent';
import Layout from '../components/Layout';


export default function SubPageSeven() {
  return (
    <Layout>
      <IndexContainer header="Plant as Witnesses" columns={columns} />
    </Layout>
  );
}
