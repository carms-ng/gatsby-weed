import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/ThirdLandscapeContent';
import Layout from '../components/Layout';


export default function SubPageSeven() {
  return (
    <Layout>
      <IndexContainer header="Third Landscape" columns={columns} />
    </Layout>
  );
}
