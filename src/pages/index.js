import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import gif_7 from '../assets/gifs/007_body-as-landscape.gif';
import gif_2 from '../assets/gifs/002_conditioned-nature.gif';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import IntroSection from '../components/Intro';
import Footer from '../components/Footer';
import Overlay from '../components/Overlay';

const FallingStyles = styled.div`
  .zoomin {
    opacity: 1;
    animation-name: zoomin;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
    animation-fill-mode: both;
    animation-direction: alternate;
  }

  @keyframes zoomin {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(1.2, 1.2);
    }
  }
`;

export default function HomePage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { absolutePath: { regex: "/landing_page/" } }
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

  // Gatsby image
  const jpgs = data.allFile.edges;
  console.log(jpgs);

  // Add AOS Scroll Library

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  });

  // Scroll effects
  useEffect(() => {
    const pTags = document.querySelectorAll('p');
    const images = document.querySelectorAll('img');

    let options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px 0px 100px 0px',
      threshold: 0.7,
    };

    pTags.forEach((tag) => {
      tag.setAttribute('data-aos', 'fade-down');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (entry.target.localName === 'img') {
            console.log(entry);
            entry.target.classList.add('zoomin');
          }
        }
      });
    }, options);

    images.forEach((tag) => {
      observer.observe(tag);
    });
  }, []);

  return (
    <Layout>
      {/* TODO: Intro Statement to be refined */}
      <div
        className="pt-32 pl-6 md:pt-60 md:pl-12 md:-ml-half-width"
        style={{ maxWidth: '80vw', fontFamily: 'MonetaSans' }}
      >
        <p className="mb-4 italic">
          "What is a weed?
          <br />
          What is a weed?"
        </p>
        <p className="italic">
          - Julian Bannerman, Great Gardens: Trematon Castle, Nowness
        </p>
      </div>
      <section className="grid pt-8">
        <IntroSection />
        <Link
          to="amarente"
          // style={{ margin: '100px 15vw 0 15vw' }}
          className="img-container max-w-3/4 mx-auto"
        >
          <Img
            fluid={jpgs[0].node.childImageSharp.fluid}
            alt={jpgs[0].node.base.split('.')[0]}
            // imgStyle={{ transition: `all 500ms ase 0s` }}
          />
          <Overlay />
        </Link>
      </section>
      <FallingStyles id="scrollArea">
        {/* Intro Poem */}
        <section className="space-y-6 pt-12">
          <p className="">Is a weed</p>
          <p className="ml-24">
            A <span className="tracking-wider pl-2">displaced</span> plant
          </p>
          <p className="text-right sm:text-left sm:ml-96">
            a plant out of place
          </p>
          <p className="text-right sm:text-left sm:ml-80">In a not no place</p>
          <p className="ml-36">Is a weed</p>
          <p className="text-right sm:text-left sm:ml-60">
            A (vegetal) being holding <em>ground</em>
          </p>
        </section>

        <div className="w-11/12 mx-auto">
          {/* 0.1 Title Mobile */}
          <div className="text-rose md:hidden">
            <Link to="index-concrete-plant">
              <h2 className="text-5xl md:text-7xl">0.1</h2>
              <h3 className="text-xl uppercase  tracking-wide  md:hidden">
                Concrete & Plant Relationships
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.1 Title Desktop */}
        <div className="title hidden md:block">
          <Link to="index-concrete-plant">
            <h2 className="ml-24">0.1</h2>
            <div className="subtitle">
              <h3>Concrete & Plant Relationships</h3>
            </div>
          </Link>
        </div>

        {/* 0.1 Poem */}
        <section className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="my-12 space-y-2 col-span-1">
              <p className="my-12">
                <em>
                  Landing ground — to land on the ground — to come through{' '}
                </em>
              </p>
              <p className="">A weed is</p>
              <p className="ml-16">Is a weed</p>
              <p className="ml-32">Is a weed</p>
              <p className="ml-48">Is a weed</p>
            </div>
            <Link
              to="concrete-plant"
              className="img-container self-end md:justify-self-center mx-4 max-w-1/2 md:max-w-3/10"
              // style={{ maxWidth: "30vw", marginLeft: "15vw"}}
            >
              <Img
                fluid={jpgs[1].node.childImageSharp.fluid}
                alt={jpgs[1].node.base.split('.')[0]}
              />
              <Overlay />
            </Link>
          </div>

          <div className="mt-12 space-y-2 md:align-right self-center">
            <p className="">Is a weed</p>
            <p className="ml-8 sm:ml-16">
              A plant negotiating concrete{' '}
              <span className="pl-1 tracking-wider">rup</span>
            </p>
            <p className="text-right sm:text-left sm:ml-80">
              <span className="tracking-wider">ture</span>
            </p>
            <p className="py-6 text-right sm:text-left sm:ml-96">s</p>

            <div className="space-y-2 pb-12 leading-loose">
              <p className="text-right">
                Are weeds pushing their way out of every crack,
              </p>
              <p className="text-right">
                nature’s proof of her will to resist the human’s urge to control
                it?
              </p>
              <p className="pt-12 text-right">
                A reminder that every built environment must exist in
              </p>
              <p className="">
                negotiation — ideally in harmony — with its natural one.
              </p>
              <p className="pt-12">Is a weed then,</p>
              <p className="">
                A resistance to laboriously curated, easily manageable and
                predictable urban spaces
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="my-12 space-y-2 self-center">
              <p className="">Weeds,</p>
              <p className="ml-12">Blurring seductively clear</p>
              <div className="space-y-2 pt-4 sm:ml-56 lg:ml-24">
                <div className="flex flex-row-reverse">
                  <div className="img-container max-w-1/2 self-start overflow-hidden">
                    <Link to="conditioned-nature">
                      <img src={gif_2} alt="" />
                      <Overlay />
                    </Link>
                  </div>
                  <div className="space-y-2 flex-grow">
                    <p className="">P</p>
                    <p className="ml-4">A</p>
                    <p className="ml-8">T</p>
                    <p className="ml-12">H</p>
                    <p className="ml-16">W</p>
                    <p className="ml-20">A</p>
                    <p className="ml-24">Y</p>
                    <p className="ml-28 hidden lg:inline">
                      S , roads, tidy delineations
                    </p>
                  </div>
                </div>
                <p className="ml-28 lg:hidden">S , roads, tidy delineations</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto">
          {/* 0.2 Title Mobile */}
          <div className="w-11/12 mx-auto text-rose md:hidden">
            <Link to="index-conditioned-nature">
              <h2 className="text-5xl md:text-7xl">0.2</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Conditioned Nature
              </h3>
            </Link>
          </div>

          {/* 0.2 Title Desktop */}
          <div className="title hidden md:block">
            <Link to="index-conditioned-nature">
              <h2 className="ml-24">0.2</h2>
              <div className="subtitle">
                <h3>Conditioned Nature</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* 0.2 Poem */}
        <section className="flex flex-col my-12">
          <div className="space-y-2 pb-12 leading-loose">
            <p className="">Weeds,</p>
            <p className="ml-12">
              Show us how to be in the presence of discomfort, of{' '}
              <span className="pl-4 tracking-wider">disruptions</span>
            </p>
            <p className="pt-24 ml-12">Is a weed</p>
            <p className="ml-32">A pioneer</p>
            {/* Modal 1 */}
            <p className="underline text-right sm:text-left sm:ml-32">
              <Link to="">An opportunistic germinator</Link>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Img
                fluid={jpgs[2].node.childImageSharp.fluid}
                alt={jpgs[2].node.base.split('.')[0]}
              />
            </div>
            <div className="space-y-2 pb-0 leading-loose place-self-end text-right sm:text-left sm:place-self-center">
              <p className="">Is a weed</p>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8">Is a weed</p>
              <p className="sm:ml-28">
                A history maker, a storyteller, a punctuator
              </p>
            </div>
          </div>
        </section>

        <div className="w-11/12 mx-auto">
          {/* 0.3 Title Mobile */}
          <div className="text-rose text-right md:hidden">
            <Link to="index-plants-witness">
              <h2 className="text-5xl md:text-7xl">0.3</h2>
              <h3 className="text-xl uppercase tracking-wide md:hidden">
                Plants as Witnesses
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.3 Title Desktop */}
        <div className="title hidden md:block text-right">
          <Link to="index-plants-witness">
            <h2 className="mr-48">0.3</h2>
            <div className="subtitle">
              <h3 className="right">Plants as Witnesses</h3>
            </div>
          </Link>
        </div>

        {/* 0.3 Poem */}
        <section className="flex flex-col my-12 space-y-12">
          <div className="text-center space-y-2 mb-24">
            <p>
              Is a weed the thought in our minds that make us move more
              vigorously
            </p>
            <p>Is a weed the dance between the boundary and the threshold</p>
            <p>Is a weed the feeling in our bodies that agitates our skin</p>
            <p>Is a weed the song we sing when we settle to sleep</p>
          </div>
          <div className="img-container mx-auto max-w-3/4">
            <Img
              fluid={jpgs[3].node.childImageSharp.fluid}
              alt={jpgs[3].node.base.split('.')[0]}
            />
          </div>
          <div className="grid lg:grid-cols-4 gap-6 py-12">
            <div className="space-y-2 self-center lg:col-span-2 lg:self-auto">
              <p className="">Is a weed</p>
              <p className="ml-16">To push beyond the edge,</p>
              <p className="ml-16">to keep to the margin,</p>
              <p className="ml-16">to straddle in between,</p>
              <p className="ml-16">to protrude more than others</p>
            </div>

            <div className="img-container max-w-2/5 lg:max-w-1/2 order-first ml-auto mr-12 lg:mx-auto lg:order-3">
              <Img
                fluid={jpgs[4].node.childImageSharp.fluid}
                alt={jpgs[4].node.base.split('.')[0]}
              />
            </div>

            <div className="space-y-8 self-center text-right lg:text-left pt-12 lg:pt-32 lg:pb-12 order-4">
              <p className="mr-40 lg:mx-0">Is a weed</p>
              <p className="mr-16 pb-4 lg:ml-24 lg:mr-0 ">To take space</p>
              <p className="mr-48 lg:ml-24 lg:mr-0 ">To speak louder</p>
              <p className="mr-56 lg:ml-24 lg:mr-0 ">To live longer</p>
            </div>
          </div>
        </section>

        {/* 0.4 Poem */}
        {/* 0.4 Title Mobile */}
        <div className="mx-auto w-11/12">
          <div className="text-right text-rose md:hidden">
            <Link to="index-third-landscape">
              <h2 className="text-5xl md:text-7xl">0.4</h2>
              <h3 className="text-xl uppercase tracking-wide md:hidden">
                Third Landscape
              </h3>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {/* 0.4 Stanza 1 */}
          <div className="ml-8">
            <p className="pb-12 tracking-wide">A PLANT PROLIFERATING</p>
            <p className="ml-16">
              ernabling <span className="pl-2 tracking-widest">etnlmns</span>
            </p>
            <p className="ml-36 pt-4">
              <span className="tracking-widest">nageet</span>
            </p>
          </div>
          <div>
            {/* 0.4 Title Desktop */}
            <div className="title hidden md:block text-right">
              <Link to="index-third-landscape">
                <h2 className="mr-48">0.4</h2>
                <div className="subtitle">
                  <h3 className="right">Third Landscape</h3>
                </div>
              </Link>
            </div>
            {/* 0.4 Stanza 2 */}
            <div className="mr-8 pt-32 space-y-2">
              <p className="text-right tracking-wide">
                STRANGLING the stuff of living
              </p>
              <p className="tracking-wide">REGENERATING the stuff of living</p>
            </div>
          </div>
        </div>

        {/* 0.4 Stanza 3, 4, 5, modal, & image */}
        <section className="my-12 space-y-6">
          <div className="">
            <p className="">Is a weed</p>
            <p className="ml-16">A plant living in the urban human habitat</p>
            <p className="ml-28 pt-8">a landscape?</p>
            {/* MODAL 2 */}
            <Link to="/">
              <p className="underline sm:ml-28">A third landscape.</p>
            </Link>
          </div>
          <div className="">
            <p className="">Is a weed</p>
            <p className="ml-16">Speaking</p>
            <p className="ml-28 pt-8">for</p>
            <p className="ml-28 pt-8">the soil</p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-2 self-end pt-12 lg:pb-12">
              <p className="">
                The types of weed found growing in soil indicate its composition
              </p>
              <p className="ml-16">Moss and plantain love an acidic ground</p>
              <p className="ml-28 pt-8">Chicory thrives in fertile soil</p>
              <p className="ml-28 pt-8">
                Knotweed needs a heavy and compacted home
              </p>
              <p className="ml-28 pt-8">
                Clover will cover a lawn lacking nitrogen
              </p>
            </div>
            <div className="img-container max-w-1/2">
              <Link to="third-landscape">
                <Img
                  fluid={jpgs[5].node.childImageSharp.fluid}
                  alt={jpgs[5].node.base.split('.')[0]}
                />
                <Overlay />
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto">
          {/* 0.5 Title Mobile */}
          <div className="w-11/12 mx-auto text-rose md:hidden">
            <Link to="index-displace-migrate">
              <h2 className="text-5xl md:text-7xl">0.5</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Displacement / Migration
              </h3>
            </Link>
          </div>

          {/* 0.5 Title Desktop */}
          <div className="title hidden md:block">
            <Link to="index-displace-migrate">
              <h2 className="ml-24">0.5</h2>
              <div className="subtitle">
                <h3>Displacement / Migration</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* 0.5 Poem */}

        <div className="flex md:flex-row-reverse">
          <div className="img-container my-12 mr-6 md:mr-0 md:ml-12 max-w-1/2 self-start overflow-hidden">
            <Link to="body-landscape">
              {/* insert gif for 007 */}
              <img src={gif_7} alt="Body Is/As Landscape" />
              <Overlay />
            </Link>
          </div>
          <div className="space-y-2 self-center">
            {/* Placeholder text!! Not real */}
            <p className="">Is a weed</p>
            <p className="">A way to navigate oneself</p>
            <p className="">through space,</p>
            <p className="">through a place,</p>
            <p className="">through no place</p>
          </div>
        </div>

        <section className="my-12 mx-auto max-w-3/4">
          <p className="ml-16">Is a weed</p>
          {/* MODAL 3 */}
          <Link to="/">
            <p className="underline sm:ml-28">
              The vegetal most akin to the human spirit
            </p>
          </Link>
          <p className="ml-28 pt-8 text-right">
            Weeds, testimonies of resilience and adaptability — their numerous
            seeds
          </p>
          <p className="ml-28 pt-8 text-right">
            remaining dormant for many years, waiting for the right conditions
            to spring,
          </p>
          <p className="ml-28 pt-8 text-right">
            spreading easily and rapidly in inhospitable locales —
          </p>
          <p className="ml-28 pt-8 text-right">
            Showing us how to develop survival mechanisms to counter
          </p>
          <p className="ml-28 pt-8 text-right">removal</p>
          <p className="ml-28 pt-8 text-right">Disappearance</p>
        </section>

        {/* 0.6 Title Mobile */}
        <div className="mx-auto">
          <div className="w-11/12 mx-auto text-rose md:hidden">
            <Link to="index-body-landscape">
              <h2 className="text-5xl md:text-7xl">0.6</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Body in / as Landscape
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.6 Poem */}
        <div className="grid md:grid-cols-2">
          <div>
            {/* 0.6 Title Desktop */}
            <div className="title hidden md:block">
              <Link to="index-body-landscape">
                <h2 className="ml-24">0.6</h2>
                <div className="subtitle">
                  <h3>Body in / as Landscape</h3>
                </div>
              </Link>
            </div>
            {/* 0.6 Stanza 2 */}
            <div>
              <p className="">Is a weed</p>
              <p className="">A paragon</p>
              <p className="">For bodies made to feel out of place</p>
              <p className="">For displaced bodies</p>
              <p className="">For contested bodies</p>
              <p className="">
                For Indigenous bodies whose land rights are contested
              </p>
              <p className="">For migrant bodies denied ressources</p>
            </div>
          </div>

          <section className="my-12 mx-auto max-w-3/4">
            <div>
              <p className="ml-16">A weed</p>
              <p className="ml-28 pt-8 text-right italic">
                Teaching the body how to become its own landscape
              </p>
            </div>
            <div className="img-container mx-auto lg:max-w-1/2">
              <Link to="fuki">
                <Img
                  fluid={jpgs[6].node.childImageSharp.fluid}
                  alt={jpgs[6].node.base.split('.')[0]}
                />
                <Overlay />
              </Link>
            </div>
            <div>
              <p className="ml-16">Is a weed</p>
              <p className="ml-28 pt-8 text-right">Resistance</p>
              <p className="ml-16">Is a weed</p>
              <p className="ml-28 pt-8 text-right">Resisting definition</p>
            </div>
          </section>

          {/* 0.7 Title & Image */}
          <div className="grid grid-cols-2 mr-12 md:mr-24">
            {/* 0.7 Title Mobile */}
            <div className="ml-4 text-rose md:hidden">
              <Link to="index-furthermore">
                <h2 className="text-5xl md:text-7xl">0.7</h2>
                <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                  Furthermore
                </h3>
              </Link>
            </div>
            {/* 0.7 Title Desktop */}
            <div className="title hidden md:block">
              <Link to="index-furthermore">
                <h2 className="ml-24">0.7</h2>
                <div className="subtitle">
                  <h3>Furthermore</h3>
                </div>
              </Link>
            </div>
            <Link to="roses" className="img-container mr-0 ml-auto max-w-2/5">
              <Img
                fluid={jpgs[7].node.childImageSharp.fluid}
                alt={jpgs[7].node.base.split('.')[0]}
              />
              <Overlay />
            </Link>
          </div>
        </div>
      </FallingStyles>
      <Footer />
    </Layout>
  );
}
