import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Video from '../components/Video';
import Video_15 from '../assets/videos/015_conditioned-nature.mp4';
import { rand } from '../utils/helper';
import ExplodeContainer from '../components/ExplodeContainer';

export default function SubPageThree() {
  const data = useStaticQuery(graphql`
    query GetImagesConditioned {
      allFile(filter: { absolutePath: { regex: "/conditioned_nature/" } }) {
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
      <Video
        style={{
          position: 'absolute',
          width: `${rand(70, 40)}vmin`,
          zIndex: rand(20, 1),
        }}
        className="explodee"
        src={Video_15}
      />
    </ExplodeContainer>
  );
}
