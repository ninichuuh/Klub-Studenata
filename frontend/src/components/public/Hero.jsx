import { textIntro } from "./Animate";
import { useLayoutEffect, useRef } from "react";
const Head = () => {
  let intro = useRef();

  useLayoutEffect(() => {
    //animate text
    textIntro(intro);
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
      <div className='h-80 w-80 bg-[url("https://data.labin.com/web/fotovijesti/neobavezno_1138_v.jpg")] bg-center bg-no-repeat'></div>
    </section>
  );
};

export default Head;
