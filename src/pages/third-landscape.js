import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import gif_45 from '../assets/gifs/045_third-landscape.gif';
import styled from 'styled-components';
import { rand } from '../utils/helper';
import { initImagePosition, explodeAndDrift } from '../utils/effect';

const ExplodeStyles = styled.div`
  overflow: hidden;
  .explodee {
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export default function SubPageFour() {
  const data = useStaticQuery(graphql`
    query GetImagesThirdLandscape {
      allFile(filter: { absolutePath: { regex: "/third_landscape/" } }) {
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

  useEffect(() => {
    const images = document.querySelectorAll(".explodee");
    initImagePosition(images);
  },[]);

  return (
    <Layout>
      <Nav />
      <ExplodeStyles onClick={explodeAndDrift}>
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
        <img
          src={gif_45}
          alt="Third Landscape"
          style={{
            position: 'absolute',
            overflow: 'visible',
            width: `${rand(70, 30)}vmin`,
            zIndex: rand(20, 1),
          }}
          className="explodee"
        />
      </ExplodeStyles>
    </Layout>
  );
}
