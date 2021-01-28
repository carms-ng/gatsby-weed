import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/BodyLandscapeContent';
import Layout from '../components/Layout';

export default function SubPageSeven() {
  return (
    <Layout>
      <IndexContainer header="Body In / As Landscape" columns={columns} />
    </Layout>
  );
}
