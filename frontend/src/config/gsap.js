import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { TextPlugin } from "gsap/TextPlugin";
export * from "gsap";
export * from "gsap/Flip";
export * from "gsap/ScrollTrigger";
export * from "gsap/Observer";
export * from "gsap/ScrollToPlugin";
export * from "gsap/Draggable";
export * from "gsap/EaselPlugin";
export * from "gsap/MotionPathPlugin";
export * from "gsap/TextPlugin";

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,

  TextPlugin
);
