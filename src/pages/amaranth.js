/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import NavSubpage from '../components/NavSubpage';
import styled from 'styled-components';
import LightBox, { prepLightBox } from '../components/LightBox';

const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 90vw;
  margin: auto;
`;

export default function SubPageOne() {
  const data = useStaticQuery(graphql`
    query GetImagesAmaranth {
      allFile(
        filter: { absolutePath: { regex: "/amaranth/" } }
        sort: { fields: base }
      ) {
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
  `);
  const jpgs = data.allFile.edges;

  // implement lightbox
  const [isLightBoxOpen, setLightBox] = useState(false);

  const openLightBox = (e) => {
    const elem = e.target.cloneNode(true);
    prepLightBox(elem)
    setLightBox(true);
  }

  useEffect(() => {
    if (window.innerWidth <= 640) {
      const lightBoxAbles = document.querySelectorAll("img, video");
      lightBoxAbles.forEach(elem => {
        elem.addEventListener('click', openLightBox);
      })
      return () => {
        lightBoxAbles.forEach(elem => {
          elem.removeEventListener('click', openLightBox);
        })
      }
    }
  }, [])
  
  return (
    <Layout>
      <LightBox isLightBoxOpen={isLightBoxOpen} setLightBox={setLightBox} />
      <NavSubpage />
      <ImageContainer>
        {/* Row 1 */}
        <div className="container grid relative">
          <div className="container w-1/2 absolute self-center z-10"> 
            <Img
              fluid={jpgs[0].node.childImageSharp.fluid}
              alt={jpgs[0].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
          </div>
          <div className="container w-3/4 ml-auto mr-0">
            <Img
              fluid={jpgs[1].node.childImageSharp.fluid}
              alt={jpgs[1].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
          </div>
          <div className="container w-1/3 absolute bottom-1/4 right-10 z-20 ">
            <Img
              fluid={jpgs[2].node.childImageSharp.fluid}
              alt={jpgs[2].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="my-24 max-w-1/2">
          <Img
            fluid={jpgs[3].node.childImageSharp.fluid}
            alt={jpgs[3].node.base.split('.')[0]}
          />
        </div>

        {/* Row 3 */}
        <div className="my-24">
          <div className="container w-1/4 z-10 relative">
            <Img
              fluid={jpgs[4].node.childImageSharp.fluid}
              alt={jpgs[4].node.base.split('.')[0]}
            />
          </div>
          <div className="container ml-24 -mt-16 w-1/2">
            <Img
              fluid={jpgs[5].node.childImageSharp.fluid}
              alt={jpgs[5].node.base.split('.')[0]}
            />
          </div>
          <div className="grid grid-cols-2 -mt-24 gap-2">
            <div className="container self-end">
              <Img
                fluid={jpgs[6].node.childImageSharp.fluid}
                alt={jpgs[6].node.base.split('.')[0]}
              />
            </div>
            <div className="container">
              <Img
                fluid={jpgs[7].node.childImageSharp.fluid}
                alt={jpgs[7].node.base.split('.')[0]}
              />
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="container grid relative my-24">
          <div className="container w-3/4">
            <Img
              fluid={jpgs[8].node.childImageSharp.fluid}
              alt={jpgs[8].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
          </div>
          <div className="container w-1/6 absolute bottom-4 lg:bottom-10 left-4 lg:left-10 z-10">
            <Img
              fluid={jpgs[9].node.childImageSharp.fluid}
              alt={jpgs[9].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
          </div>
          <div className="container w-1/3 absolute self-center right-32 z-20 ">
            <Img
              fluid={jpgs[10].node.childImageSharp.fluid}
              alt={jpgs[10].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex my-24 space-x-12">
          <div className="container w-1/3 self-end">
            <Img
              fluid={jpgs[11].node.childImageSharp.fluid}
              alt={jpgs[11].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
          <div className="container grid relative">
            <Img
              fluid={jpgs[12].node.childImageSharp.fluid}
              alt={jpgs[12].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', width: '100%' }}
            />
            <div className="container absolute w-1/4 self-center left-4 md:left-12">
              <Img
                fluid={jpgs[13].node.childImageSharp.fluid}
                alt={jpgs[13].node.base.split('.')[0]}
                imgStyle={{ objectFit: 'contain', width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Row 6 */}
        <div className="mt-24 max-w-1/2 ml-auto">
          <Img
            fluid={jpgs[14].node.childImageSharp.fluid}
            alt={jpgs[14].node.base.split('.')[0]}
          />
        </div>

        {/* Row 7 */}
        <div className="mb-24 flex max-w-1/2 ml-auto space-x-12 ">
          <div className="container w-1/3 self-end">
            <Img
              fluid={jpgs[15].node.childImageSharp.fluid}
              alt={jpgs[15].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
          <div className="container w-1/2 self-end">
            <Img
              fluid={jpgs[16].node.childImageSharp.fluid}
              alt={jpgs[16].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Rows 8 & 9 */}
        <div className="my-24 grid grid-cols-2 justify-between">
          <div className="container mx-auto w-1/2">
            <Img
              fluid={jpgs[17].node.childImageSharp.fluid}
              alt={jpgs[17].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
          <div className="container w-3/4 mt-24 mx-auto self-end">
            <Img
              fluid={jpgs[21].node.childImageSharp.fluid}
              alt={jpgs[21].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
          <div className="container w-3/4 mt-36 self-end">
            <Img
              fluid={jpgs[18].node.childImageSharp.fluid}
              alt={jpgs[18].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
          <div className="container">
            <Img
              fluid={jpgs[19].node.childImageSharp.fluid}
              alt={jpgs[19].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Row 9 */}
        <div className="my-24 w-1/3 flex ml-auto mr-0 relative">
          <div className="container self-end">
            <Img
              fluid={jpgs[20].node.childImageSharp.fluid}
              alt={jpgs[20].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
          <div className="container absolute bottom-1/4 -left-32">
            <Img
              fluid={jpgs[22].node.childImageSharp.fluid}
              alt={jpgs[22].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: '100%',
              }}
            />
          </div>
        </div>
      </ImageContainer>
    </Layout>
  );
}
