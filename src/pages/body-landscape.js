import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"
import Layout from '../components/Layout';

export default function SubPageFive() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {absolutePath: {regex: "/body_landscape/"}}, sort: {fields: base}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const jpgs = data.allFile.edges;
  console.log(jpgs)

  return (
    <Layout>
      <div className="grid grid-cols-2">

      </div>

      <div className="container justify-self-end md:justify-self-center px-4 max-w-1/2 md:max-w-3/10">     
        <Img
          fluid={jpgs[1].node.childImageSharp.fluid}
          alt={jpgs[1].node.base.split(".")[0]}
          />
      </div>
    </Layout>
  );
}
