import { rand } from './helper';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Prep image position for explode effect
export const initImagePosition = (images) => {
  images.forEach(image => {
    image.style.top = window.innerHeight / 2 - image.offsetHeight / 2 + 'px';
    image.style.left = image.parentElement.offsetWidth / 2 - image.offsetWidth / 2 + 'px';
    image.style.transform = `translate(0, 0)`;
    image.style.transition = `all 1s ease-in-out`;
  })
}

// Explode effect upon click, then a slow drft.
export const explodeAndDrift = () => {
  const explodees = document.querySelectorAll(".explodee");
  if (explodees) {
    // Set window height
    let pageHeight = 0;
    explodees.forEach((elem) => {
      pageHeight += elem.offsetHeight;
    })
    // PageHeight at least has to be 100vh;
    pageHeight = pageHeight < window.innerHeight ? window.innerHeight : pageHeight / 1.5;

    explodees.forEach((elem) => {
      // update transition property
      elem.style.transition = `all 0.8s ease-in-out`;
      const initialY = parseInt(elem.style.top, 10);
      const initialX = parseInt(elem.style.left, 10)

      // Set the canvas
      const maxX = window.innerWidth - elem.offsetWidth;
      const maxY = pageHeight - elem.offsetHeight;

      // Move image to a random position
      const y = rand(0, maxY);
      const x = rand(0, maxX);
      setTimeout(() => {
        elem.style.top = y + 'px';
        elem.style.left = x + 'px';
      }, 100)

      // Calculate projected position
      let finalX;
      let finalY;

      if (x === initialX && y === initialY) {
        finalX = maxX;
        finalY = maxY;
      } else if (x === initialX) {
        if (y > initialY) {
          finalY = maxY;
          finalX = x;
        } else {
          finalY = 0;
          finalX = x;
        }
      } else if (y === initialY) {
        if (x > initialX) {
          finalY = y;
          finalX = maxX;
        } else {
          finalY = y;
          finalX = 0;
        }
      } else {
        const landaLeft = (0 - initialX) / ( x - initialX );
        const landaRight = (maxX - initialX) / ( x - initialX );
        const landaTop = (0 - initialY) / ( y - initialY );
        const landaBottom = (maxY - initialY) / ( y - initialY );
        const positiveLandas = [landaLeft, landaRight, landaTop, landaBottom].filter(landa => landa > 0 );
        const minLanda = Math.min(...positiveLandas);
        finalY = minLanda * (y - initialY) + initialY;
        finalX = minLanda * (x - initialX) + initialX;
      }

      // Slow glide
      setTimeout(() => {
        elem.style.transition = `all 45s linear`;
          elem.style.top = finalY + 'px';
          elem.style.left = finalX + 'px';
      }, 1000)
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
          entry.target.style.animation = `1.5s cubic-bezier(0.11, 0, 0.5, 0) zoomout forwards`;
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
