import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { rand } from '../utils/helper';
import ExplodeContainer from '../components/ExplodeContainer';

export default function SubPageTwo() {
  const data = useStaticQuery(graphql`
    query GetImagesConcrete {
      allFile(filter: { absolutePath: { regex: "/concrete_plant/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 2048, quality: 80) {
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
  `);

  return (
    <ExplodeContainer>
      {data.allFile.edges.map(({ node }) => (
        <Img
          style={{
            position: 'absolute',
            overflow: 'visible',
            width: `${rand(70, 30)}vmin`,
            zIndex: rand(20, 1),
          }}
          className="explodee"
          fluid={node.childImageSharp.fluid}
          key={node.base}
          alt={node.base.split('.')[0]}
        />
      ))}
    </ExplodeContainer >
  );
}
