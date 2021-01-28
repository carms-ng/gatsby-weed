import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/ConditionedNatureContent';
import Layout from '../components/Layout';

export default function ConditionedNatureIndex() {
  return (
    <Layout>
      <IndexContainer header="Conditioned Nature" columns={columns} />
    </Layout>
  );
}
