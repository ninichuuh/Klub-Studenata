import { useRef, useLayoutEffect } from "react";
import { titleAnimate } from "./Animate";
import { Mate,Studenti } from "../../img/images";

const About = () => {
let title = useRef()


useLayoutEffect(() =>{
  titleAnimate(title);
},[])


  return (
    <section
      id="about"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height mb-12 flex scroll-mt-20 flex-row place-content-evenly items-center gap-12 p-6"
    ><div className="relative w-1/2">
      <img src={Studenti} alt="absolute" />
      <img src={Mate} alt="" className="absolute"/>
    </div>
      <article className="w-1/2">
        <h1
          ref={(el) => (title=el)}
          className="text-center text-4xl  font-bold text-slate-900 animate__animated dark:text-white sm:text-5xl"
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
      </article>
      <button className="h-20 w-48 self-center rounded-xl border border-solid border-slate-900 bg-green-900 p-3 text-2xl font-semibold capitalize text-white hover:bg-green-700 hover:shadow-custom active:bg-green-500 dark:border-none">
        Saznaj Više
      </button>
    </section>
  );
};

export default About;
