import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import gif_7 from '../assets/gifs/007_body-as-landscape.gif';
import gif_2 from '../assets/gifs/002_conditioned-nature.gif';
import styled from 'styled-components';

import IntroSection from '../components/Intro';
import Footer from '../components/Footer';

const FallingStyles = styled.div`
  p {
    opacity: 0;
    transform: translateY(-20vh);
    transition: all 0.6s cubic-bezier(0.11, 0, 0.5, 0);
  }
  .falling {
    opacity: 1;
    animation-name: falling;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
    animation-fill-mode: forwards;
  }
  .zoomin {
    opacity: 1;
    animation-name: zoomin;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
    animation-fill-mode: forwards;
  }
  @keyframes falling {
    from {
      transform: translateY(-20vh);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes zoomin {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(1.2, 1.2);
    }
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

  // Scroll effects
  useEffect(() => {
    const pTags = document.querySelectorAll("p");
    const images = document.querySelectorAll("img");

    let options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px 0px 100px 0px',
      threshold: 0.7,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (entry.target.localName === "img") {
            console.log(entry);
            entry.target.classList.add('zoomin');
          } else {
            entry.target.classList.add('falling');
          }
        }
      });
    }, options);

    pTags.forEach((tag) => {
      observer.observe(tag);
    })
    images.forEach(tag => {
      observer.observe(tag);
    })

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
        <Link to="amarente">
          <Img
            fluid={jpgs[0].node.childImageSharp.fluid}
            alt={jpgs[0].node.base.split('.')[0]}
          />
        </Link>
      </section>
      <FallingStyles id="scrollArea">
        {/* Intro Poem */}
        <section className="space-y-6 pt-12">
          <p className="">Is a weed</p>
          <p className="ml-24">
            A <span className="tracking-widest pl-2">displaced</span> plant
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
              className="container justify-self-end md:justify-self-center px-4 max-w-1/2 md:max-w-3/10"
              // style={{ maxWidth: "30vw", marginLeft: "15vw"}}
            >
              <Img
                fluid={jpgs[1].node.childImageSharp.fluid}
                alt={jpgs[1].node.base.split('.')[0]}
              />
            </Link>
          </div>

          <div className="mt-12 space-y-2 md:align-right self-center">
            <p className="">Is a weed</p>
            <p className="ml-8 sm:ml-16">
              A plant negotiating concrete{' '}
              <span className="pl-1 tracking-widest">rup</span>
            </p>
            <p className="text-right sm:text-left sm:ml-80">
              <span className="tracking-widest">ture</span>
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
                  <div className="container px-4 max-w-1/2">
                    <Link to="conditioned-nature">
                      <img src={gif_2} alt="" />
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
          <div className="text-rose md:hidden">
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
              <span className="pl-4 tracking-widest">disruptions</span>
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

        <div className="mx-auto">
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
        <section className="flex flex-col my-12 space-y-6">
          <Link to="/" className="container mx-auto max-w-3/4">
            <Img
              fluid={jpgs[3].node.childImageSharp.fluid}
              alt={jpgs[3].node.base.split('.')[0]}
            />
          </Link>
          <div className="flex justify-end py-12">
            <div className="flex-grow space-y-2 self-center lg:self-auto">
              {/* Placeholder text!! Not real */}
              <p className="">Is a weed</p>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8">Is a weed</p>
              <p className="sm:ml-28">
                A history maker, a storyteller, a punctuator
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="container px-4 min-w-1/2 md:min-w-1/4">
                <Link to="/">
                  <Img
                    fluid={jpgs[4].node.childImageSharp.fluid}
                    alt={jpgs[4].node.base.split('.')[0]}
                  />
                </Link>
              </div>
              <div className="space-y-2 self-end pt-12 lg:pb-12">
                {/* Placeholder text!! Not real */}
                <p className="">Is a weed</p>
                <p className="ml-16">What is yet to come</p>
                <p className="ml-28 pt-8">Is a weed</p>
              </div>
            </div>
          </div>
        </section>

        {/* 0.4 Poem */}
        {/* 0.4 Title Mobile */}
        <div className="mx-auto">
          <div className="text-rose text-right md:hidden">
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
          <div>Stanza 1</div>
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
            <div>Stanza 2</div>
          </div>
        </div>

        {/* 0.4 Stanza 3, 4, modal, & image */}
        <section className="my-12 space-y-6">
          {/* Placeholder text!! Not real */}
          <div className="">
            <p className="">Is a weed test</p>
            <p className="ml-16">What is yet to come</p>
            <p className="ml-28 pt-8">Is a weed</p>
            <p className="sm:ml-28">
              A history maker, a storyteller, a punctuator
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-2 self-end pt-12 lg:pb-12">
              {/* Placeholder text!! Not real */}
              <p className="">Is a weed</p>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8">Is a weed</p>
            </div>
            <div className="container px-4 max-w-1/2">
              <Link to="/">
                <Img
                  fluid={jpgs[5].node.childImageSharp.fluid}
                  alt={jpgs[5].node.base.split('.')[0]}
                />
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto">
          {/* 0.5 Title Mobile */}
          <div className="text-rose md:hidden">
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
        <section className="my-12 mx-auto max-w-3/4">
          <p className="ml-16">What is yet to come</p>
          <p className="ml-28 pt-8 text-right">Is a weed</p>
        </section>

        <div className="flex md:flex-row-reverse">
          <div className="py-12 mr-6 md:mr-0 md:ml-12 max-w-1/2">
            <Link to="/">
              {/* insert gif for 007 */}
              <img src={gif_7} alt="" />
            </Link>
          </div>
          <div className="space-y-2 self-center">
            {/* Placeholder text!! Not real */}
            <p className="">Is a weed</p>
            <p className="">What is yet to come</p>
            <p className="">Is a weed</p>
          </div>
        </div>

        <section className="my-12 mx-auto max-w-3/4">
          <p className="ml-16">What is yet to come</p>
          <p className="ml-28 pt-8 text-right">Is a weed</p>
        </section>

        {/* 0.6 Poem */}
        <div className="mx-auto">
          {/* 0.6 Title Mobile */}
          <div className="text-rose md:hidden">
            <Link to="index-body-landscape">
              <h2 className="text-5xl md:text-7xl">0.6</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Body in / as Landscape
              </h3>
            </Link>
          </div>
        </div>

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
            <div>Stanza 2</div>
          </div>

          <section className="my-12 mx-auto max-w-3/4">
            <div>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8 text-right">Is a weed</p>
            </div>
            <div className="container mx-auto lg:max-w-1/2">
              <Link to="/">
                <Img
                  fluid={jpgs[6].node.childImageSharp.fluid}
                  alt={jpgs[6].node.base.split('.')[0]}
                />
              </Link>
            </div>
            <div>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8 text-right">Is a weed</p>
            </div>
          </section>

          {/* 0.7 Title & Image */}
          <div className="grid md:grid-cols-2 mr-12 md:mr-24">
            <div className="">
              {/* 0.7 Title Mobile */}
              <div className="text-rose md:hidden">
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
            </div>
            <Link to="/" className="container mx-auto max-w-2/5">
              <Img
                fluid={jpgs[7].node.childImageSharp.fluid}
                alt={jpgs[7].node.base.split('.')[0]}
              />
            </Link>
          </div>
        </div>
      </FallingStyles>
      <Footer />
    </Layout>
  );
}
