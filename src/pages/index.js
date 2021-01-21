// import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

  return (
    <Layout>
     {/* Intro Statement */}
     <div className="w-11/12 mx-auto">
        <section className="grid">
          <h1 className="mx-auto pt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">What is a weed?</h1>
          <div className="grid md:grid-cols-2 gap-12 mx-12 mt-4 text-justify">
            <div className="max-w-prose">
              <p className="mb-4">On camera, famed British gardener Bannerman asks this seemingly simple question whilst walking in his Trematon Castle garden in Cornwall, with a spiky giant Gunnera in hand, the leaves acting as an oversized umbrella over the imposing man. Yet, he spent months removing the invasive petasites from the grounds of the garden when he first started working on it.</p>
              
              <p className="mb-4">Here lies the complexity of offering an answer to this treacherous interrogation. A plant is, first and foremost, regarded as a weed according to its desirability to humans in a given context. In this human-centric perspective, it is a plant that is not valued for certain of its particular characteristics and properties, making it undesirable, to be eradicated through various — often violent — methods. As the famous gardener asks us to reconsider our narrow conceptions of nature, at the core of his role, lies the desire to control and manipulate nature.</p>
              
              
              <p className="mb-4">What do these plants become when growing in an alternate third space (or is it the first space)? Vegetal practices such as gardening have a long history of control and conditioning of nature as a separate, subservient non-human entity — the desire to tame it in accordance with human’s use of space.</p>
            </div>
            <div className="max-w-prose">
              <p className="mb-4">
              Weeding out undesirable plants is a part of this practice. What potential then lies in relinquishing control to these undesirables? Is this ground for a rewilding revolution, a quiet resistance and decolonial utopia? To think through the question of what is a weed is to problematize the varied notions, to become conscious of the dualistic divide of nature and culture, and to break it down like a mycellic cell in a heap of soil and humus.</p>

              <p className="mb-4">This collaborative multi-disciplined project, which premises itself on the idea of vegetal and human entanglements, weaves a collection of provocations, questions and investigations that explore and interrogate the multi-faceted notions of a weed through essays of images and texts using the digital landscape as fertile ground to germinate from. We agitate metaphysical soil and thread together plant provocations and metaphors. We explore the weed’s place in the construction of landscapes, botanical migration across the globe and we situate the body as a landscape.
              </p>
            </div>
          </div>
          <Img
              fixed={data.fileName.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
              className="mx-auto w-full"
            />
        </section>

        {/* Intro Poem */}
        <section className="space-y-6">
          <p className="">Is a weed</p>
          <p className="ml-24">A <span className="tracking-widest">displaced</span> plant</p>
          <p className="ml-96">a plant out of place</p>
          <p className="ml-80">In a not no place</p>
          <p className="ml-36">Is a weed</p>
          <p className="ml-60">A (vegetal) being holding <em>ground</em></p>        
        </section>

        {/* 0.1 Title */}        
        <div className="text-rose lg:hidden">
         <a href="IndexPage1" className="">
            <h2 className="text-5xl lg:text-7xl">0.1</h2>
            <h3 className="text-xl lg:hidden">Concrete & Plant Relationships</h3>
          </a>
        </div>

        <div className="text-rose hidden lg:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
          <a href="IndexPage1" className="">
            <h2 className="z-10 absolute bottom-2 left-16 text-7xl">0.1</h2>
            <div className="z-auto absolute bottom-4 left-4">
              <h3 className="text-5xl text-beige hover:text-rose-dark transition-all ease-in duration-700">Concrete & Plant Relationships</h3>
            </div>
          </a>
        </div>



        <div className="grid">
          <div className="">
            <h1 className="pt-5">What is a weed?</h1>
            <Img
              fixed={data.fileName.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}