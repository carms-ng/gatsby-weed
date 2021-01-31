/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import gif_3 from '../assets/gifs/003_roses.gif';
import Layout from '../components/Layout';
import NavSubpage from '../components/NavSubpage';
import styled from 'styled-components';
import LightBox, { prepLightBox } from '../components/LightBox';

const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 80vw;
  margin: auto;
`;

export default function SubPageSeven() {
  const data = useStaticQuery(graphql`
    query GetImagesRoses {
      allFile(
        filter: { absolutePath: { regex: "/roses/" } }
        sort: { fields: base }
      ) {
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
      const area = document.querySelector('.lightbox-able');
      const lightBoxAbles = area.querySelectorAll("img, video");
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
      <ImageContainer className="lightbox-able">
        {/* Row 1 */}
        <div className="max-w-lg text-justify text-sm lg:text-base">
          <p>Even Roses can “become” a weed.</p>
          <p>
            Arguably the most desired -- one could say cliché -- flower in the
            world.
          </p>
          <p className="ml-12 md:ml-28">Yet,</p>
          <p className="ml-20 md:ml-36 pb-6">
            before becoming widely commercialized, all roses were wild flowers.
          </p>
          <p>
            In Missouri, Multiflora roses have made use of their highly adaptive
            nature to escape the ornamental, manicured or managed bounds they
            were intended to stay in or delineate. They've push their way in and
            through, crawled in and out, settled under and over. Now that they
            grow in third landscapes, now that they've taken over native plants,
            now they've defied control, they've been declared a weed.
          </p>
        </div>

        {/* Row 2 */}

        <div className="ml-auto mr-12 w-36 max-w-1/4 my-24">
          <Img
            fluid={jpgs[0].node.childImageSharp.fluid}
            alt={jpgs[0].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
          />
        </div>

        {/* Row 3 */}

        <div className="container relative my-24">
          <Img
            fluid={jpgs[1].node.childImageSharp.fluid}
            alt={jpgs[1].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain' }}
          />
          <div className="absolute w-1/4 top-6 right-6 md:top-12 md:right-12">
            <img src={gif_3} alt="Roses"/>
          </div>
          <div className="absolute w-1/4 bottom-6 left-12 md:bottom-12 md:left-24">
            <Img
              fluid={jpgs[2].node.childImageSharp.fluid}
              alt={jpgs[2].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Row 4 */}

        <div className="ml-auto mr-6 w-48 max-w-1/4 my-24">
          <Img
            fluid={jpgs[3].node.childImageSharp.fluid}
            alt={jpgs[3].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
          />
        </div>

        {/* Row 5 */}

        <div className="flex my-24">
          <div className="container min-w-1/2">
            <Img
              fluid={jpgs[4].node.childImageSharp.fluid}
              alt={jpgs[4].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', maxHeight: '80vh' }}
            />
          </div>

          <div className="container -ml-10 self-center">
            <Img
              fluid={jpgs[5].node.childImageSharp.fluid}
              alt={jpgs[5].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', maxHeight: '30vh' }}
            />
          </div>
          <div className="container self-end ml-6 md:ml-12 -mb-6 md:-mb-24">
            <Img
              fluid={jpgs[7].node.childImageSharp.fluid}
              alt={jpgs[7].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
            />
          </div>
        </div>

        {/* Row 6 */}

        <div className="mr-auto ml-6 w-48 max-w-1/4 my-24">
          <Img
            fluid={jpgs[8].node.childImageSharp.fluid}
            alt={jpgs[8].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
          />
        </div>
        {/* Row 7 */}
        <div className="container flex max-w-2/5 ml-16 md:ml-24 space-x-6 md:space-x-16 my-24">
          <Img
            fluid={jpgs[9].node.childImageSharp.fluid}
            alt={jpgs[9].node.base.split('.')[0]}
            className="container top-8 md:top-20"
            imgStyle={{
              objectFit: 'contain',
              maxHeight: '50vh',
              width: '100%',
            }}
          />
          <Img
            fluid={jpgs[10].node.childImageSharp.fluid}
            alt={jpgs[10].node.base.split('.')[0]}
            className="container"
            imgStyle={{
              objectFit: 'contain',
              maxHeight: '50vh',
              width: '100%',
            }}
          />
        </div>

        {/* Row 8 */}
        <div className="container flex ml-auto mr-0 max-w-1/2  my-24">
          <Img
            fluid={jpgs[11].node.childImageSharp.fluid}
            alt={jpgs[11].node.base.split('.')[0]}
            className="container h-16 md:h-36 lg:h-48 self-center"
            imgStyle={{
              objectFit: 'contain',
              maxHeight: '50vh',
              width: '100%',
            }}
          />

          <Img
            fluid={jpgs[12].node.childImageSharp.fluid}
            alt={jpgs[12].node.base.split('.')[0]}
            className="container md:h-80 lg:h-96 self-center"
            imgStyle={{
              objectFit: 'contain',
              maxHeight: '50vh',
              width: '100%',
            }}
          />
        </div>

        {/* Row 9 */}
        <div className="grid gap-6 grid-cols-2 max-h-full my-24">
          <div className="container flex max-h-full ">
            <Img
              fluid={jpgs[13].node.childImageSharp.fluid}
              alt={jpgs[13].node.base.split('.')[0]}
              className="container"
            />
          </div>
          <div className="container flex max-h-full self-center lg:w-3/4 mx-auto">
            <Img
              fluid={jpgs[14].node.childImageSharp.fluid}
              alt={jpgs[14].node.base.split('.')[0]}
              className="container"
            />
          </div>
        </div>

        {/* Row 10 */}
        <div className="grid grid-cols-3 container gap-6 my-24 max-h-screen">
          <div className="container col-span-2">
            <Img
              fluid={jpgs[15].node.childImageSharp.fluid}
              alt={jpgs[15].node.base.split('.')[0]}
              className="container -bottom-6 md:-bottom-16"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '70vh',
                width: '100%',
              }}
            />
          </div>
          <div className="container">
            <Img
              fluid={jpgs[16].node.childImageSharp.fluid}
              alt={jpgs[16].node.base.split('.')[0]}
              className="container md:w-1/2"
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '70vh',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Row 11 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-36">
          <div className="container lg:col-span-2">
            <Img
              fluid={jpgs[17].node.childImageSharp.fluid}
              alt={jpgs[17].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                width: 'auto',
              }}
            />
          </div>
          <div className="max-w-md space-y-6 text-sm lg:text-base">
            <p>
              Multiflora rose is an exotic invasive perennial shrub native to
              China, Japan, and Korea (Zheng et al 2006; Dirr, 1998; Amrine and
              Stasny, 1993). Introduced into the United States in the 1860s
              (Dryer, 1996), multiflora rose was used in the horticultural
              industry as readily available rose root stock for rose breeding
              programs and as an ornamental garden plant (Amrine and Stasny,
              1993). By the 1930s it was widely planted in the Midwest and
              northeastern states at the encouragement of the USDA, Soil
              Conservation Service for erosion control programs, wildlife
              habitat enhancement programs, and as a natural barrier to roaming
              farm animals (i.e. “living fence”) (Amrine and Stasny, 1993;
              Evans, 1983).
            </p>
            <p>
              During the 1960s, conservationists were warning others of the
              dangers of this plant to unmanaged natural areas. However, many
              state conservation departments and agencies still encouraged
              interested people and organizations to plant multiflora rose to
              create a source of food for song birds and for wildlife cover for
              many kinds of animals [...]
            </p>
            <p>
              Evans (1983) also states that some highway departments encouraged
              the use of multiflora rose on highway median strips to reduce
              headlight glare from oncoming traffic and as a natural crash
              barrier to stop out-of-control cars because of this species’
              ability to form dense thickets quickly.
            </p>
            <p>
              As with other exotic invasive plants, multiflora rose was promoted
              for the wrong reasons while being planted widely throughout the
              Midwest, northeast, and elsewhere. It has escaped cultivation
              spreading into private and public lands, and as a result has been
              classified as a noxious weed in many states. (Dryer, 1996;
              Symonds, 1963; Munger, 2002)
            </p>
          </div>
        </div>
      </ImageContainer>
    </Layout>
  );
}
