import { textIntro, mateIntro } from "./Animate";
import { useLayoutEffect, useRef } from "react";
import { Koza } from "../../img/images";
import { ReactComponent as Strip } from "../../img/strip.svg";
const Head = () => {
  let intro = useRef();
  let mate = useRef();
  useLayoutEffect(() => {
    //animate text
    textIntro(intro);
    mateIntro(mate);
    console.log("use effect prosao");
  }, []);
  return (
    <section
      id="hero"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 overflow-hidden p-6 sm:flex-row"
    >
      <article className="sm:w-1/2" ref={(el) => (intro = el)}>
        <p className="mt-4 grid w-32 justify-items-center rounded-[5px] bg-zuta text-right text-base font-bold text-black  sm:text-left">
          1963-2023
        </p>
        <h2 className="max-w-md text-center text-6xl font-bold  sm:text-left sm:text-5xl">
          Klub studenata Istre "Mate Balota"
        </h2>
        <p className="mt-4 max-w-md text-center text-base  sm:text-left">
          Udruga s ciljem okupljanja studenata radi prenošenja tradicije
          solidarnosti i promoviranja istarske kulture.
        </p>
      </article>
      <div ref={(el) => (mate = el)} className="flex flex-row">
        <img src={Koza} alt="Goat" height={650} width={500} />
        <Strip />
      </div>
    </section>
  );
};

export default Head;
