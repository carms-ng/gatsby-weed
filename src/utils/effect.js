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
      elem.style.top = rand(pageHeight, 0) + "px";
      elem.style.left = rand(80, 20) + "vw";
    })
  }
}