import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import gif_45 from '../assets/gifs/045_third-landscape.gif';
import { rand } from '../utils/helper';
import ExplodeContainer from '../components/ExplodeContainer';

export default function SubPageFour() {
  const data = useStaticQuery(graphql`
    query GetImagesThirdLandscape {
      allFile(filter: { absolutePath: { regex: "/third_landscape/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 2048, quality: 80) {
                ...GatsbyImageSharpFluid
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
            width: `${rand(70, 40)}vmin`,
            zIndex: rand(20, 1),
          }}
          className="explodee"
          fluid={node.childImageSharp.fluid}
          key={node.base}
          alt={node.base.split('.')[0]}
        />
      ))}
      <img
        src={gif_45}
        alt="Third Landscape"
        style={{
          position: 'absolute',
          width: `${rand(70, 40)}vmin`,
          zIndex: rand(20, 1),
        }}
        className="explodee"
      />
    </ExplodeContainer>
  );
}
