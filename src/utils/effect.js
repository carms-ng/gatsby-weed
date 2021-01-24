import { rand } from './helper';

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