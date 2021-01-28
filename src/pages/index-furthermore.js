import React from 'react';
import IndexContainer from '../components/IndexContainer';
import columns from '../assets/contents/FurthermoreContent';
import Layout from '../components/Layout';


export default function SubPageSeven() {
  return (
    <Layout>
      <IndexContainer header="Furthermore" columns={columns} />
    </Layout>
  );
}
