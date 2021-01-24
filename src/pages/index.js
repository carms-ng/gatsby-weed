import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link} from "gatsby";
import Img from "gatsby-image";
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
    query {
      fileName: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  useEffect(() => {
    const pTags = document.querySelectorAll("p");
    const images = document.querySelectorAll("img");

    let options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px 0px 100px 0px',
      threshold: 0.70,
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          if (entry.target.localName === "img") {
            console.log(entry);
            entry.target.classList.add('zoomin');
          } else {
            entry.target.classList.add('falling');
          }
        }
        // console.log(entry);
      })
    }, options)

    pTags.forEach(tag => {
      observer.observe(tag);
    })
    images.forEach(tag => {
      observer.observe(tag);
    })

  }, []);



  return (

    <Layout>
      <div className="w-11/12 mx-auto">
        {/* TODO: Intro Statement to be refined */}
        <section className="pt-32 pl-6 md:pt-60 md:pl-12 md:-ml-half-width" style={{ maxWidth: "80vw", fontFamily: "MonetaSans"}}>
          <p className="mb-4 italic">"What is a weed?<br/>What is a weed?"</p>
          <p className="italic">- Julian Bannerman, Great Gardens: Trematon Castle, Nowness</p>
        </section>
        <section className="grid pt-8">
          <IntroSection />
          <Link to="amarente">
            <Img
                fixed={data.fileName.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt=""
                className="mx-auto w-full"
              />
          </Link>
        </section>

        <FallingStyles id="scrollArea">
          {/* Intro Poem */}
          <section className="space-y-6 pt-12">
            <p>Is a weed</p>
            <p className="ml-24">A <span className="tracking-widest">displaced</span> plant</p>
            <p className="text-right sm:text-left sm:ml-96">a plant out of place</p>
            <p className="text-right sm:text-left sm:ml-80">In a not no place</p>
            <p className="ml-36">Is a weed</p>
            <p className="text-right sm:text-left sm:ml-60">A (vegetal) being holding <em>ground</em></p>
          </section>

          {/* 0.1 Title Mobile */}        
          <div className="text-rose md:hidden">
            <Link to="index-concrete-plant">
              <h2 className="text-5xl md:text-7xl">0.1</h2>
              <h3 className="text-xl uppercase  tracking-wide  md:hidden">Concrete & Plant Relationships</h3>
            </Link>
          </div>
       
          {/* 0.1 Title Desktop */}
          <div className="text-rose hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
            <Link to="index-concrete-plant">
              <h2 className="z-10 absolute bottom-2 left-16 text-7xl">0.1</h2>
              <div className="z-auto absolute bottom-4 left-4">
                <h3 className="md:text-4xl lg:text-5xl uppercase tracking-wide  text-beige hover:text-rose-dark transition-all ease-in duration-700">Concrete & Plant Relationships</h3>
              </div>
            </Link>
          </div>

          {/* 0.1 Poem */}
          <section className="flex flex-col">
            <div className="my-12 space-y-2">
              <p className="my-12 md:text-center"><em>Landing ground — to land on the ground — to come through </em></p>
              <p className="">A weed is</p>
              <p className="ml-16">Is a weed</p>
              <p className="ml-32">Is a weed</p>
              <p className="ml-48">Is a weed</p>      
            </div>
            
            <Link to="concrete-plant">
              <Img
                  fixed={data.fileName.childImageSharp.fixed}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt=""
                  className="float-right sm:mr-16 md:mr-32 lg:mr-48"
                />
            </Link>

            {/* 0.1 Title Desktop */}
            <div className="text-rose hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
              <Link to="IndexPage1">
                <h2 className="z-10 absolute bottom-2 left-16 text-7xl">0.1</h2>
                <div className="z-auto absolute bottom-4 left-4">
                  <h3 className="text-5xl uppercase tracking-wide  text-beige hover:text-rose-dark transition-all ease-in duration-700">Concrete & Plant Relationships</h3>
                </div>
              </Link>
            </div>
            <Link to="conditioned-nature">
              <Img
                  fixed={data.fileName.childImageSharp.fixed}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt=""
                  className="float-right sm:mr-16 md:mr-32 lg:mr-48"
                />
            </Link>
            <div className="my-12 space-y-2 self-center">
              <p className="">Weeds,</p>
              <p className="ml-12">Blurring seductively clear</p>
              <div className="space-y-2 pt-4 sm:ml-56">
                <p className="">P</p>
                <p className="ml-4">A</p>
                <p className="ml-8">T</p>
                <p className="ml-12">H</p>
                <p className="ml-16">W</p>
                <p className="ml-20">A</p>
                <p className="ml-24">Y</p>
                <p className="ml-28">S , roads, tidy delineations</p>
              </div>  
            </div>
          </section>

          {/* 0.2 Title Mobile */}        
          <div className="text-rose md:hidden">
          <Link to="index-conditioned-nature">
              <h2 className="text-5xl md:text-7xl">0.2</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">Conditioned Nature</h3>
            </Link>
          </div>
        
          {/* 0.2 Title Desktop */}
          <div className="text-rose hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
            <Link to="index-conditioned-nature">
              <h2 className="z-10 absolute bottom-2 left-16 text-7xl">0.2</h2>
              <div className="z-auto absolute bottom-4 left-4">
                <h3 className="md:text-4xl lg:text-5xl uppercase tracking-wide text-beige hover:text-rose-dark transition-all ease-in duration-700">Conditioned Nature</h3>
              </div>
            </Link>
          </div>

          {/* 0.2 Poem */}
          <section className="flex flex-col my-12">
            <div className="space-y-2 pb-12 leading-loose">
              <p className="">Weeds,</p>
              <p className="ml-12">Show us how to be in the presence of discomfort, of <span className="pl-4 tracking-widest">disruptions</span></p>
              <p className="pt-24 ml-12">Is a weed</p>
              <p className="ml-32">A pioneer</p>
              {/* Modal 1 */}
              <p className="underline text-right sm:text-left sm:ml-32">
                <Link to="">An opportunistic germinator</Link>
              </p>
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="overflow-hidden mx-auto">
                <Img
                    fixed={data.fileName.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt=""
                  />
              </div>

              <Link to="">
                <Img
                    fixed={data.fileName.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt=""
                    className="float-right sm:mr-16 md:mr-32 lg:mr-48"
                  />
              </Link>

              <div className="mt-12 space-y-2 md:align-right self-center">
                <p className="">Is a weed</p>
                <p className="ml-8 sm:ml-16">A plant negotiating concrete <span className="pl-1 tracking-widest">rup</span></p>
                <p className="text-right sm:text-left sm:ml-80"><span className="tracking-widest">ture</span></p>
                <p className="py-6 text-right sm:text-left sm:ml-96">s</p>

                  <div className="space-y-2 pb-12 leading-loose">
                    <p className="text-right">Are weeds pushing their way out of every crack,</p>
                    <p className="text-right">nature’s proof of her will to resist the human’s urge to control it?</p>
                    <p className="pt-12 text-right">A reminder that every built environment must exist in</p>
                    <p className="">negotiation — ideally in harmony — with its natural one.</p>
                    <p className="pt-12">Is a weed then,</p>
                    <p className="">A resistance to laboriously curated, easily manageable and predictable urban spaces</p>
                  </div>
              </div>
              <Link to="">
                <Img
                    fixed={data.fileName.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt=""
                    className="float-right sm:mr-16 md:mr-32 lg:mr-48"
                  />
              </Link>
              <div className="my-12 space-y-2 self-center">
                <p className="">Weeds,</p>
                <p className="ml-12">Blurring seductively clear</p>
                <div className="space-y-2 pt-4 sm:ml-56">
                  <p className="">P</p>
                  <p className="ml-4">A</p>
                  <p className="ml-8">T</p>
                  <p className="ml-12">H</p>
                  <p className="ml-16">W</p>
                  <p className="ml-20">A</p>
                  <p className="ml-24">Y</p>
                  <p className="ml-28">S , roads, tidy delineations</p>
                </div>  
              </div>
            </div>
          </section>

          {/* 0.3 Title Mobile */}        
          <div className="text-rose text-right md:hidden">
            <Link to="index-plants-witness">
              <h2 className="text-5xl md:text-7xl">0.3</h2>
              <h3 className="text-xl uppercase tracking-wide md:hidden">Plants as Witnesses</h3>
            </Link>
          </div>
          
          {/* 0.3 Title Desktop */}
          <div className="text-rose text-right hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
            <Link to="index-plants-witness">
              <h2 className="z-10 absolute bottom-2 right-48 xl:right-80 text-7xl">0.3</h2>
              <div className="z-auto absolute bottom-4 right-4">
                <h3 className="md:text-4xl lg:text-5xl uppercase tracking-wide text-beige hover:text-rose-dark transition-all ease-in duration-700">Plants as Witnesses</h3>
              </div>
            </Link>
          </div>

        </FallingStyles>
      
      </div>
      <Footer />
    </Layout>
  );
}