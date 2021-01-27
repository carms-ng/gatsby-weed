import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import NavSubpage from '../components/NavSubpage';
import styled from 'styled-components';
import { rand } from '../utils/helper';
import { explode } from '../utils/effect';

const ExplodeStyles = styled.div`
  overflow: hidden;
  padding: 100px;
  .explodee {
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s ease-in-out;
  }
  .floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes floating {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export default function SubPageOne() {
  const data = useStaticQuery(graphql`
    query myQuery {
      allFile(filter: { name: { regex: "/^01.+/" } }) {
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
    <Layout>
      <NavSubpage />
      <ExplodeStyles onClick={explode}>
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
      </ExplodeStyles>
    </Layout>
  );
}
