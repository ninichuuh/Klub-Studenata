import React from "react";
import SectionSwiper from "../UI/SectionSwiper";
const Sections = () => {
  return (
    <section
      id="sections"
      className="widescreen:section-min-height  tallscreen:section-min-height section-min-height my-12 flex scroll-mt-20 flex-col p-6"
    >
      <h2 className="mb-12 text-center text-base font-bold text-white underline decoration-yellow-300 decoration-solid decoration-[14px] underline-offset-[14px] sm:text-5xl">
        Sekcije Kluba
      </h2>
      <p>
        Klub se sastoji od šest sekcija u kojima naši studenti sit amet,
        consectetur adipiscing elit. Proin cursus, tellus id condimentum
        fringilla, risus nisi pharetra mi, in ornare ante ex sed erat.
      </p>
      <div className="mt-16 flex ">
        <SectionSwiper />
      </div>
    </section>
  );
};

export default Sections;
