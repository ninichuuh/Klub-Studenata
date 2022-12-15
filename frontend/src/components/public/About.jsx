import { useRef, useLayoutEffect } from "react";
import { titleAnimate } from "./Animate";
import { Mate, Studenti } from "../../img/images";

const About = () => {
  let title = useRef();

  useLayoutEffect(() => {
    titleAnimate(title);
  }, []);

  return (
    <section
      id="about"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height mb-12 flex scroll-mt-20 flex-row place-content-evenly items-center gap-12 p-6"
    >
      <div className="relative w-1/2">
        <img
          src={Studenti}
          alt="absolute top-0 left-0"
          height={375}
          width={500}
        />
        <img
          src={Mate}
          alt=""
          className="h absolute right-0 bottom-0 z-10"
          height={300}
          width={200}
        />
      </div>
      <article className="flex w-1/2 flex-col justify-center">
        <h1
          ref={(el) => (title = el)}
          className="text-center text-4xl font-bold  underline decoration-yellow-300 decoration-solid decoration-[14px] underline-offset-2 sm:text-5xl"
        >
          O Nama
        </h1>
        <p className="mt-8 text-center text-2xl text-slate-700 dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          ligula quis nisi suscipit accumsan. Cras a magna nec lacus malesuada
          pellentesque a vestibulum ante. In vitae ex tincidunt, tempus velit
          vitae, tincidunt ex. Suspendisse nec risus tempus, auctor risus a,
          scelerisque lacus.
        </p>
        <button className="w-44 h-10 rounded-[7px] border border-solid border-slate-900 bg-green-900 p-3 text-base font-semibold capitalize  hover:bg-green-700 hover:shadow-custom active:bg-green-500 dark:border-none">
          Saznaj Više
        </button>
      </article>
    </section>
  );
};

export default About;
