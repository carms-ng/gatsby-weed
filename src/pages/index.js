// import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function HomePage() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="pt-5">What is a weed?</h1>
      <Img
        fixed={data.fileName.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
    </Layout>
  );
}