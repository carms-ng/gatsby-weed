import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const IntroStyles = styled.div`
  position: relative;
  padding-bottom: 120px;

  h1 {
    text-align: center;
    white-space: nowrap;
  }
`;

export default function IntroSection() {
  const [scrollPos, setScrollPos] = useState(0);

  const moveTitle = (scrollPos) => {
    const h1 = document.getElementById("intro-title");
    const h6 = document.getElementById("intro-text");

    if (h1) {
      // guard clause to allow for animation to happen once only
      if (h1.dataset.animated !== "true") {
        // to address when it gets scrolls back up before animation ends.
        if (h6.parentElement.getBoundingClientRect().top > 0) {
          h1.style.position = `relative`;
          h1.style.transform = ``;
          h1.style.left = `unset`;
          h6.style.paddingTop = 0;
  
        } else if (h1.getBoundingClientRect().top <= 0 && h6.getBoundingClientRect().bottom > 0 ) {
          // Set padding top to replace the height of h1
          h6.style.paddingTop = h1.offsetHeight + 'px';
          // Set Start Scroll Position
          const stScrollPos = h1.parentElement.getBoundingClientRect().top + document.documentElement.scrollTop;
          // Calculate expected h1 position left based on scrollY and height of elements
          const totDistanceY = h6.offsetHeight;
          // Proportion of Y traveled
          const yPos = (window.scrollY - stScrollPos) / totDistanceY;
          
          // Set h1 to fixed
          h1.style.top = 0;
          h1.style.transform = `translateX(-50%)`;
          h1.style.position = `fixed`;
          const totDistanceX = (h6.parentElement.offsetWidth - h1.offsetWidth) / 2;
          const xPos = totDistanceX * yPos;
          const h1Left = window.innerWidth * 0.5 + xPos;
          h1.style.left = `${h1Left}px`;
        } else if (h6.getBoundingClientRect().bottom < 0) {
          // Only animate once, set h1 to absolute
          h1.dataset.animated = true;
          h1.style.top = `unset`;
          h1.style.transform = ``;
          h1.style.bottom = 0;
          h1.style.left = `unset`;
          h1.style.right = 0;
          h1.style.position = `absolute`;
        } 
      } 
    }
  }

  const handleScroll = () => {
    // animate title
    moveTitle(scrollPos);
    const newScrollPos = document.body.getBoundingClientRect().top;
    setScrollPos(newScrollPos);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPos]);

  return (
    <IntroStyles>
      <h1
        id="intro-title"
        className="pt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        What is a weed?
      </h1>
      <div id="intro-text" className="grid md:grid-cols-2 md:gap-12 px-6 sm:px-12 pt-4 text-justify justify-items-center">
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
