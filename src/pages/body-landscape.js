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
      <section className="container">
        <div className="flex container">   
          <Img
            fluid={jpgs[0].node.childImageSharp.fluid}
            alt={jpgs[0].node.base.split(".")[0]}
            className="container"
            />
          <Img
            fluid={jpgs[1].node.childImageSharp.fluid}
            alt={jpgs[1].node.base.split(".")[0]}
            className="container"
            />
          <Img
            fluid={jpgs[2].node.childImageSharp.fluid}
            alt={jpgs[2].node.base.split(".")[0]}
            className="container"
            />

        </div>

        <div className="grid grid-cols-2">
          <Img
            fluid={jpgs[3].node.childImageSharp.fluid}
            alt={jpgs[3].node.base.split(".")[0]}
            className="container"
            />

        </div>

        <div className="grid grid-cols-3">

        </div>

        <div className="grid grid-cols-2">

        </div>
        <div className="flex">

        </div>
        
        <div className="flex">

        </div>
        
        <div className="flex">

        </div>

        <div className="container justify-self-end md:justify-self-center px-4 max-w-1/2 md:max-w-3/10"> 
          <div className="container">   
            <Img
              fluid={jpgs[1].node.childImageSharp.fluid}
              alt={jpgs[1].node.base.split(".")[0]}
              />
          </div> 
        </div>
      </section>
    </Layout>
  );
}
