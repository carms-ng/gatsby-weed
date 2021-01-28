import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/DisplaceMigrateContent';
import Layout from '../components/Layout';

export default function SubPageSeven() {
  return (
    <Layout>
      <IndexContainer header="Displacement / Migration" columns={columns} />
    </Layout>
  );
}
