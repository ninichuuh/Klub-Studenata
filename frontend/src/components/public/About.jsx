import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height mb-12 flex scroll-mt-20 flex-col place-content-evenly items-center gap-12 p-6"
    >
      <article className="">
        <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white">
          O Nama
        </h2>
        <p className="mt-8 text-center text-2xl text-slate-700 dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          ligula quis nisi suscipit accumsan. Cras a magna nec lacus malesuada
          pellentesque a vestibulum ante. In vitae ex tincidunt, tempus velit
          vitae, tincidunt ex. Suspendisse nec risus tempus, auctor risus a,
          scelerisque lacus. Pellentesque ullamcorper erat vitae leo elementum
          tristique. Integer non eros vitae quam suscipit pulvinar id eget
          dolor. Ut maximus quam erat, eu aliquam risus porttitor nec. Sed ut
          rutrum nunc. Ut aliquet risus odio, eu malesuada lorem blandit quis.
          Aenean ut orci varius, sollicitudin urna ac, placerat lorem. Fusce non
          convallis ligula, at egestas lectus. Duis ac porttitor arcu. Sed id
          semper ligula, sed aliquam mauris. Donec pretium eget enim vel
          consectetur. Quisque in leo ut mauris fringilla malesuada non a erat.
          Nam tristique nisl id placerat viverra. Pellentesque dignissim libero
          sed enim porta malesuada. Sed fermentum sem dui, id mollis orci
          facilisis quis. Ut quis ex nec arcu vestibulum posuere sed eget augue.
        </p>
      </article>
      <button className="h-20 w-48 self-center rounded-xl border border-solid border-slate-900 bg-green-900 p-3 text-2xl font-semibold capitalize text-white hover:bg-green-700 hover:shadow-custom active:bg-green-500 dark:border-none">
        Saznaj Više
      </button>
    </section>
  );
};

export default About;
