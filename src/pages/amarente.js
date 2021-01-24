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
    // set window height
    let pageHeight = 0;
    explodees.forEach((elem) => {
      pageHeight += elem.clientHeight;
    })
    // for each of the element set top and left style randomly
    explodees.forEach((elem) => {
      elem.style.top = rand(pageHeight, 0) + "px";
      elem.style.left = rand(80, 20) + "vw";
    })
  }

  const ExplodeStyles = styled.div`
    padding: 100px;

    .explodee {
      top: 50vh;
      left: 50vw;
      transform: translate(-50%, -50%);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      transition: all 1s ease-in-out;
    }
  `;

  return (
    <Layout>
      <ExplodeStyles onClick={explode}>
        {data.allFile.edges.map(({ node } ) => (
          <Img
            style={{ position: "absolute", overflow: "visible", width: `${rand(70, 30)}vmin`}}
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
