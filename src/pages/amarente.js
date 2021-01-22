import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from "gatsby-image"
import Layout from '../components/Layout';
import styled from 'styled-components';

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
  
  const rand = (max, min) => {
    return Math.floor(Math.random() * (max-min) + min);
  }

  const explode = () => {
    const explodees = document.querySelectorAll(".explodee");
    console.log(explodees);
  }

  const ExplodeStyles = styled.div`
    .explodee {
      top: 50vh;
      left: 50vw;
      transform: translate(-50%, -50%);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3)
    }
  `;

return (
    <Layout>
      <ExplodeStyles onClick={explode}>
        {data.allFile.edges.map(({ node } ) => (
          <Img
            style={{ position: "absolute", overflow: "visible", width: `${rand(60, 10)}vw`}}
            // , zIndex: `${rand(20, 1)}`
            className="explodee"
            fluid={node.childImageSharp.fluid}
            key={node.base}
            alt={node.base.split(".")[0] }
          />
        ))}
      </ExplodeStyles>
    </Layout>
  );
}
