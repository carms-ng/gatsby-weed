import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from "gatsby-image"

export default function AmarentePage() {
  const data = useStaticQuery(graphql`
    query myQuery {
      allFile(filter: {name: {regex: "/^01.+/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }

  `)
  return (
    <div>
      <h1>0.1 CONCRETE & PLANT RELATIONSHIPS</h1>
      {data.allFile.edges.map(({ node } ) => (
        <Img fluid={node.childImageSharp.fluid} />
      ))}
    </div>
  );
}
