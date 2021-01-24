import React, { useEffect } from 'react';
import styled from 'styled-components'


export default function IntroSection() {
  const moveTitle = (scrollPos) => {
    const h1 = document.getElementById("intro-title")
    if (h1) {
      const h1Top = h1.getBoundingClientRect().top;
      if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // when its scrolling up
        if (h1Top > 2 * h1.clientHeight) {
          h1.classList.replace("diagonal-down", "diagonal-up");
        }
      } else {
        // when its scrolling down
        if (h1.classList.contains("diagonal-up")) {
          h1.classList.replace("diagonal-up", "diagonal-down");
        } else {
          h1.classList.add("diagonal-down");
        }
      }
    }
  }

  useEffect(() => {
    let scrollPos = 0;
    window.addEventListener('scroll', function () {
      moveTitle(scrollPos);
      scrollPos = (document.body.getBoundingClientRect()).top;
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const IntroStyles = styled.div`
    #intro-title {
      white-space: nowrap;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
    #intro-text {
      margin-top: 116px;
    }
    @media (min-width: 1280px) {
      position: relative;

      .diagonal-down {
        animation-name: diagonal-down;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      .diagonal-up {
        animation-name: diagonal-up;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      @keyframes diagonal-down {
        from {
          transform: translate(-50%, 0) 
        }
        to {
          transform: translate(0%, 600px)
        }
      }
      @keyframes diagonal-up {
        from {
          transform: translate(0%, 600px)
        }
        to {
          transform: translate(-50%, 0) 
        }
      }
    }
  `;

  return (
    <IntroStyles>
      <h1
        id="intro-title"
        className="pt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        What is a weed?
      </h1>
      <div id="intro-text" className="grid md:grid-cols-2 md:gap-12 mx-6 sm:mx-12 mt-4 text-justify justify-items-center">
        <div className="max-w-prose">
          <h6 className="mb-4">
            On camera, famed British gardener Bannerman asks this seemingly simple question whilst walking in his Trematon Castle garden in Cornwall, with a spiky giant Gunnera in hand, the leaves acting as an oversized umbrella over the imposing man. Yet, he spent months removing the invasive petasites from the grounds of the garden when he first started working on it.
          </h6>

          <h6 className="mb-4">
            Here lies the complexity of offering an answer to this treacherous interrogation. A plant is, first and foremost, regarded as a weed according to its desirability to humans in a given context. In this human-centric perspective, it is a plant that is not valued for certain of its particular characteristics and properties, making it undesirable, to be eradicated through various — often violent — methods. As the famous gardener asks us to reconsider our narrow conceptions of nature, at the core of his role, lies the desire to control and manipulate nature.
          </h6>
          <h6 className="mb-4">
            What do these plants become when growing in an alternate third space (or is it the first space)? Vegetal practices such as gardening have a long history of control and conditioning of nature as a separate, subservient non-human entity — the desire to tame it in accordance with human’s use of space.
          </h6>
        </div>
        <div className="max-w-prose">
          <h6 className="mb-4">
            Weeding out undesirable plants is a part of this practice. What potential then lies in relinquishing control to these undesirables? Is this ground for a rewilding revolution, a quiet resistance and decolonial utopia? To think through the question of what is a weed is to problematize the varied notions, to become conscious of the dualistic divide of nature and culture, and to break it down like a mycellic cell in a heap of soil and humus.
          </h6>
          <h6 className="mb-4">
            This collaborative multi-disciplined project, which premises itself on the idea of vegetal and human entanglements, weaves a collection of provocations, questions and investigations that explore and interrogate the multi-faceted notions of a weed through essays of images and texts using the digital landscape as fertile ground to germinate from. We agitate metaphysical soil and thread together plant provocations and metaphors. We explore the weed’s place in the construction of landscapes, botanical migration across the globe and we situate the body as a landscape.
          </h6>
        </div>
      </div>

    </IntroStyles>
  );
}
