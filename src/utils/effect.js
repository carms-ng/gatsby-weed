import { rand } from './helper';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const explode = () => {
  const explodees = document.querySelectorAll(".explodee");
  if (explodees) {
    // set window height
    let pageHeight = 0;
    explodees.forEach((elem) => {
      pageHeight += elem.clientHeight;
    })
    // for each of the element set top and left style randomly
    explodees.forEach((elem) => {
      // scale down by 1.2 to reduce empty spaces
      elem.style.top = (rand(pageHeight, 0) - (elem.clientHeight / 2)) / 1.2 + "px";
      elem.style.left = rand(80, 20) / 100 * window.innerWidth - (elem.clientHeight / 2) + "px";
      elem.classList.add("floating");
      elem.style.animationDuration = rand(10, 2) + "s";
    })
  }
}

export const initLineDrop = (tags) => {
  tags.forEach((tag) => tag.setAttribute('data-aos', 'fade-down'));
  AOS.init({ duration: 1500 });
  AOS.refresh();
}

export const initImageZoom = (images) => {
  // set initial variables for each images
  let previousY = {};
  let previousRatio = {};
  images.forEach(image => {
    previousRatio[image] = 0;
    previousY[image] = 0;
  })

  // Set threshold
  const thresholdArray = steps => Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0)

  let options = { 
    threshold: thresholdArray(20),
  }

  // Use IntersectionObserver to zoom effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;

      // Scrolling down
      if (currentY < previousY[entry.target] && currentRatio > 0.1) {
        // entering (more is showing)
        if (currentRatio > previousRatio[entry.target]) {
          entry.target.style.animation = `1.5s cubic-bezier(0.11, 0, 0.5, 0) zoomin forwards`;
        }
      } else if (currentY > previousY[entry.target] && currentRatio > 0.1) {
        // leaving (less is showing)
        if (currentRatio < previousRatio[entry.target]) {
          entry.target.style.animation = `1s ease-out zoomout forwards`;
        }
      }

      // update variables 
      previousY[entry.target] = currentY;
      previousRatio[entry.target] = currentRatio;
    });
  }, options);

  images.forEach((tag) => {
    observer.observe(tag);
  });
}
