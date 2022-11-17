import { textIntro, mateIntro } from "./Animate";
import { useLayoutEffect, useRef } from "react";
import {ReactComponent as Mate} from "../../img/mate.svg"
const Head = () => {
  let intro = useRef();
  let mate = useRef()
  useLayoutEffect(() => {
    //animate text
    textIntro(intro);
    mateIntro(mate)
    console.log("use effect prosao");
  }, []);
  return (
    <section
      id="hero"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 overflow-hidden p-6 sm:flex-row"
    >
      <article className="sm:w-1/2" ref={(el) => (intro = el)}>
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          Klub studenata Istre
          <span className="mx-2 text-indigo-300 dark:text-purple-400">
            Mate Balota
          </span>
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          je udruga s ciljem okupljanja studenata radi prenošenja tradicije
          solidarnosti i promoviranja istarske kulture.
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          1963-2023
        </p>
      </article>
    <div   ref={(el)=>(mate=el)} className='h-80 w-80 '>
      <Mate/>
      </div></section>
  );
};

export default Head;
