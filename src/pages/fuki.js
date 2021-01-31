/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Video from '../components/Video';
import v_0 from '../assets/videos/fuki/000_fuki.mp4';
import v_1 from '../assets/videos/fuki/001_fuki.mp4';
import v_2 from '../assets/videos/fuki/002_fuki.mp4';
import v_3 from '../assets/videos/fuki/003_fuki.mp4';
import v_4 from '../assets/videos/fuki/004_fuki.mp4';
import Layout from '../components/Layout';
import NavSubpage from '../components/NavSubpage';
import styled from 'styled-components';
import LightBox, { prepLightBox } from '../components/LightBox';

const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 90vw;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default function SubPageSix() {
  const data = useStaticQuery(graphql`
    query GetImagesFuki {
      allFile(
        filter: { absolutePath: { regex: "/fuki/" } }
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
      <Helmet>
        <title>Body As Landscape | What is a Weed?</title>
      </Helmet>
      <LightBox isLightBoxOpen={isLightBoxOpen} setLightBox={setLightBox} />
      <NavSubpage />
      <ImageContainer className="lightbox-able">
        {/* Row 1 */}
        <div className="relative mb-24">
          <div className="relative">
            <Video style={{ maxHeight: '80vh' }} src={v_2} />
            <div className="absolute w-1/4 bottom-2 left-2 lg:bottom-8 lg:left-4">
              <Img
                fluid={jpgs[0].node.childImageSharp.fluid}
                alt={jpgs[0].node.base.split('.')[0]}
                imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
              />
            </div>
          </div>
          <div className="lg:max-w-2/5 lg:absolute lg:top-20 lg:right-4 bg-white lg:px-4 py-4 text-xs">
            <p className="mb-4">
              En voiture à toute vitesse, arrêt abrupt en remarquant un
              amoncellement de majestueuses et gigantesques feuilles d'une
              plante qui m'est alors inconnue. Une surprenante apparition nichée
              en bordure de route du lac Labelle dans les Laurentides. Monte en
              nous l'envie immédiate de la posséder, mais je réalise rapidement
              qu'elle résiste à toute domestication; même en plongeant son tronc
              coupé dans un vase d'eau, sa feuille s'affaisse rapidement.
            </p>
            <p className="mb-4">
              J’identifie faussement d'abord la plante pour un Ligularia
              tussilaginea ‘Gigantea’ mais après une année passée dans l'erreur,
              je remarque que celle-ci ne fleurit pas et que ses feuilles sont
              plus friables et d'apparence mate. Je découvre finalement qu'il
              s'agit de Pétasites japonicus ‘Gigantea’, aussi appelé Fuki. Elle
              aurait été introduite au Canada en Colombie-Britannique par des
              immigrants japonais. (Pojar, Jim; MacKinnon, Andy (1994). Plants
              of the Pacific Northwest Coast.)
            </p>
            <p className="mb-4">
              J'aimerais savoir par quel heureux parcours elle s'est retrouvée
              là, aux abords de route du lac Labelle. Par quel hasard
              gracie-t-elle ce paysage « typique » fait de pins et de plantes
              indigènes? Bien que parfois vendue en centres horticoles, elle est
              ici considérée comme une plante invasive. Mes recherches à son
              sujet sont ponctuées de mises en garde : Attention! Ne laissez pas
              cette séduisante intruse envahir nos milieux sauvages.
            </p>
            <p className="mb-4">
              Et pourtant, elle semble échapper à la catégorisation de «
              mauvaise herbe ». Un heureux effet de son attrait esthétique? Ce
              n'est probablement pas dû à ses propriétés médicinales, peu
              connues de ce côté du globe. Ni même à sa place dans les
              traditions culinaires et folkloriques du Japon. On imagine tout un
              petit peuple, les Koropokkuru, vivant à l'abri de ce géant
              feuillage.
            </p>
            <p className="font-bold mb-4 text-center">
              I love the idea of this plant, out of place, misplaced, becoming
              shelter, becoming home.
            </p>
            <p>
              Peut-être que cette talle de Fuki, en bordure de route du lac
              Labelle, continuera de proliférer.
            </p>
            <p>
              Je pense avec malaise à mon corps colonisateur, est-ce que ma
              présence peut être autre qu'envahissante?
            </p>
            <p>
              Je pense avec empathie à mon corps migrant, obsédé par l'idée de
              trouver racine, de se sentir chez soi.
            </p>
            <p>
              Je pense, peut-être les réponses se trouvent-elle dans l'ambiguïté
              d'un fuki, aperçu en bordure de route du lac Labelle dans les
              Laurentides.
            </p>
          </div>
        </div>

        {/* Row 2 */}

        <div className="mr-auto ml-12 max-w-1/4 my-24">
          <Img
            fluid={jpgs[1].node.childImageSharp.fluid}
            alt={jpgs[1].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
          />
        </div>

        {/* Row 3 */}

        <div className="container flex justify-between items-center my-24 text-sm">
          <div className="w-1/2">
            <p>
              Attention ! C'est une plante{' '}
              <a
                href="https://www.lapresse.ca/maison/immobilier/conseils/200707/13/01-870610-ou-trouver-des-petasites-japonais-geants.php"
                target="_blank"
                rel="noreferrer"
                className="text-green hover:underline"
              >
                très envahissante{' '}
              </a>
              : il n'en faut qu'un seul plant pour couvrir une vaste surface.
              Aussi, ne libérez pas cette plante dans la nature, car elle
              étouffe la végétation locale.
            </p>
          </div>
          <div className="w-1/3 mr-6">
            <Img
              fluid={jpgs[2].node.childImageSharp.fluid}
              alt={jpgs[2].node.base.split('.')[0]}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Row 4 */}

        <div className="ml-auto mr-0 max-w-1/4 my-24">
          <Img
            fluid={jpgs[3].node.childImageSharp.fluid}
            alt={jpgs[3].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>

        {/* Row 5 */}

        <div className="container w-1/2 relative my-24">
          <div className="container">
            <Img
              fluid={jpgs[4].node.childImageSharp.fluid}
              alt={jpgs[4].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                maxWidth: '75vw',
                maxHeight: '90vh',
              }}
            />
          </div>
          <div className="w-1/3 absolute top-12 md:top-20 right-8 md:right-16">
            <Img
              fluid={jpgs[5].node.childImageSharp.fluid}
              alt={jpgs[5].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                maxWidth: '40vw',
              }}
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="md:w-3/4 lg:w-5/12 max-h-90vh relative mx-auto my-24">
          <div className="container max-h-90vh">
            <Img
              fluid={jpgs[6].node.childImageSharp.fluid}
              alt={jpgs[6].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                maxHeight: '90vh',
              }}
            />
          </div>
          <div className="absolute m-auto h-1/3 w-11/12 inset-0">
            <Video src={v_1} />
          </div>
        </div>

        {/* Row 8 */}

        <div className=" max-w-3/10 my-24">
          <Video src={v_0} />
        </div>

        {/* Row 9 */}

        <div className="ml-auto mr-0 max-w-2/5 my-24">
          <Video src={v_3} />
        </div>

        {/* Row 10 */}

        <div className="mr-auto ml-12 max-w-1/4 my-24">
          <Img
            fluid={jpgs[7].node.childImageSharp.fluid}
            alt={jpgs[7].node.base.split('.')[0]}
            imgStyle={{ objectFit: 'contain', maxHeight: '40vh' }}
          />

          <p>
            By
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=79715189"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:underline"
            >
              {' '}
              Matsuura Takeshiro
            </a>
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Korpokkur"
            target="_blank"
            rel="noreferrer"
            className="text-green hover:underline"
          >
            <p>Korpokkur</p>
          </a>
        </div>

        {/* Row 11 */}

        <div className="container mx-auto max-h-90vh">
          <Img
            fluid={jpgs[8].node.childImageSharp.fluid}
            alt={jpgs[8].node.base.split('.')[0]}
            imgStyle={{
              objectFit: 'contain',
              maxHeight: '90vh',
            }}
          />
        </div>

        {/* Row 12 */}

        <div className="container w-full mx-auto relative my-24">
          <div className="container relative mx-auto max-w-3/4">
            <Img
              fluid={jpgs[9].node.childImageSharp.fluid}
              alt={jpgs[9].node.base.split('.')[0]}
              className="container"
              imgStyle={{
                objectFit: 'contain',
                maxWidth: '75vw',
              }}
            />
            <div className="container absolute max-w-1/4 top-6 md:top-12 right-0">
              <Video style={{ maxWidth: '20vw' }} src={v_4} />
            </div>
          </div>
          <div className="container absolute max-w-3/10 bottom-2 md:bottom-4 ml-0">
            <Img
              fluid={jpgs[10].node.childImageSharp.fluid}
              alt={jpgs[10].node.base.split('.')[0]}
              imgStyle={{
                objectFit: 'contain',
                maxWidth: '30vw',
              }}
            />
          </div>
        </div>
      </ImageContainer>
    </Layout>
  );
}
