import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/ConcretePlantContent';
import Layout from '../components/Layout';

export default function ConcretePlantIndex() {
  return (
    <Layout>
      <IndexContainer header="Concrete & Plant Relationships" columns={columns} />
    </Layout>
  );
}
