import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link} from "gatsby"
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

  // Add sal listener for every element that enters viewport
  document.addEventListener('sal:in', ({ detail }) => {
    console.log('entering', detail.target);
  });

  // Get all p tags to apply animation
  
  var poetry = document.getElementsByName("p");

  // Apply slide-down animation to all p tags

  // Carms, I need your help!

  return (
    <Layout>
     {/* Intro Statement */}
     <div className="w-11/12 mx-auto">
        <section className="grid">
          <h1 
            className="mx-auto pt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"       
          >
              What is a weed?
          </h1>
          <div className="grid md:grid-cols-2 md:gap-12 mx-6 sm:mx-12 mt-4 text-justify">
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

        {/* Intro Poem */}
        <section className="space-y-6 pt-12">
          <p 
            data-sal="slide-down"
            data-sal-duration="700"
            data-sal-delay="100"
            data-sal-easing="ease"
            >Is a weed</p>
          <p 
            data-sal="slide-down"
            data-sal-duration="700"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="ml-24"
            >A <span className="tracking-widest">displaced</span> plant</p>
          <p 
            data-sal="slide-down"
            data-sal-duration="700"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="text-right sm:text-left sm:ml-96"
            >a plant out of place</p>
          <p 
            data-sal="slide-down"
            data-sal-duration="700"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="text-right sm:text-left sm:ml-80"
            >In a not no place</p>
          <p 
            data-sal="slide-down"
            data-sal-duration="700"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="ml-36"
            >Is a weed</p>
          <p 
            data-sal="slide-down"
            data-sal-duration="700"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="text-right sm:text-left sm:ml-60"
            >A (vegetal) being holding <em>ground</em></p>        
        </section>

        {/* 0.1 Title Mobile */}        
        <div className="text-rose md:hidden">
         <Link to="IndexPage1">
            <h2 className="text-5xl md:text-7xl">0.1</h2>
            <h3 className="text-xl uppercase  tracking-wide  md:hidden">Concrete & Plant Relationships</h3>
          </Link>
        </div>
       
        {/* 0.1 Title Desktop */}
        <div className="text-rose hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
          <Link to="IndexPage1">
            <h2 className="z-10 absolute bottom-2 left-16 text-7xl">0.1</h2>
            <div className="z-auto absolute bottom-4 left-4">
              <h3 className="text-5xl uppercase tracking-wide  text-beige hover:text-rose-dark transition-all ease-in duration-700">Concrete & Plant Relationships</h3>
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
        </section>

        {/* 0.2 Title Mobile */}        
        <div className="text-rose md:hidden">
         <Link to="IndexPage1">
            <h2 className="text-5xl md:text-7xl">0.2</h2>
            <h3 className="text-xl uppercase tracking-wide md:hidden">Conditioned Nature</h3>
          </Link>
        </div>
       
        {/* 0.2 Title Desktop */}
        <div className="text-rose hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
          <Link to="IndexPage1">
            <h2 className="z-10 absolute bottom-2 left-16 text-7xl">0.2</h2>
            <div className="z-auto absolute bottom-4 left-4">
              <h3 className="text-5xl uppercase tracking-wide text-beige hover:text-rose-dark transition-all ease-in duration-700">Conditioned Nature</h3>
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
              <Link to="" >
                <Img
                    fixed={data.fileName.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt=""
                  />
              </Link>
            </div>
            <div className="space-y-2 pb-0 leading-loose place-self-end text-right sm:text-left sm:place-self-start">
              <p className="">Is a weed</p>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8">Is a weed</p>
              <p className="sm:ml-28">A history maker, a storyteller, a punctuator</p>
            </div>
          </div>
        </section>

        {/* 0.3 Title Mobile */}        
        <div className="text-rose text-right md:hidden">
          <Link to="IndexPage1">
              <h2 className="text-5xl md:text-7xl">0.3</h2>
              <h3 className="text-xl uppercase tracking-wide md:hidden">Plants as Witnesses</h3>
            </Link>
          </div>
        
          {/* 0.3 Title Desktop */}
          <div className="text-rose text-right hidden md:block m-4 p-4 pt-16 relative hover:bg-rose-light transition-all ease-in duration-700">
            <Link to="IndexPage1">
              <h2 className="z-10 absolute bottom-2 right-48 xl:right-80 text-7xl">0.3</h2>
              <div className="z-auto absolute bottom-4 right-4">
                <h3 className="text-5xl uppercase tracking-wide text-beige hover:text-rose-dark transition-all ease-in duration-700">Plants as Witnesses</h3>
              </div>
            </Link>
          </div>


      
      </div>
    </Layout>
  );
}