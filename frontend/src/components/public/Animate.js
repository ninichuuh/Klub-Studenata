import { gsap } from "../../config/gsap.js";

export const textIntro = (elem) => {
  gsap.fromTo(
    elem,
    { scale: 0, opacity: 0 },
    { opacity: 1, stagger: 0.2, duration: 1.5, ease: "back", scale: 1 }
  );
};

export const headerIntro = (elem) => {
  gsap.fromTo(
    elem,
    { x: -1000 },
    { x: 0, duration: 1.5, ease: "Circ.easeOut" }
  );
};

export const titleAnimate = (elem) => {
  gsap.set(elem, { transformPerspective: 300 });
  gsap.fromTo(elem, {
    
    rotationX: -90,
    transformOrigin: "50% 50% 50",
    
  },{opacity:1,duration: 2, rotationX:0});
};
