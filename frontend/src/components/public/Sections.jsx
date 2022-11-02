import React from "react";
import SectionCard from "./UI/SectionCard";

import { Football, Goats, Creative } from "../../img/images";
const sectionsData = [
  {
    id: 1,
    sectionName: "Sportska sekcija",
    imgSrc: Football,
    imgAlt: "Sportska sekcija",
    text: "OVa sekcija je za nesto sta terle jos nije napisao",
  },
  {
    id: 2,
    sectionName: "Kreativna sekcija",
    imgSrc: Creative,
    imgAlt: "Kreativna sekcija",
    text: "OVa sekcija je za nesto sta terle jos nije napisao",
  },
  {
    id: 3,
    sectionName: "Popit sekcija",
    imgSrc: Goats,
    imgAlt: "Popit sekcija",
    text: "OVa sekcija je za nesto sta terle jos nije napisao",
  },
  {
    id: 4,
    sectionName: "Popit sekcija",
    imgSrc: Goats,
    imgAlt: "Popit sekcija",
    text: "OVa sekcija je za nesto sta terle jos nije napisao",
  },
  {
    id: 5,
    sectionName: "Popit sekcija",
    imgSrc: Goats,
    imgAlt: "Popit sekcija",
    text: "OVa sekcija je za nesto sta terle jos nije napisao",
  },
];

const Sections = () => {
  const sections = sectionsData.map((section) => (
    <a href={`sections/${section.id}`}>
      <SectionCard
        key={section.id}
        img={section.imgSrc}
        alt={section.imgAlt}
        text={section.text}
        name={section.sectionName}
      />
    </a>
  ));
  return (
    <section
      id="sections"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height my-12 flex scroll-mt-20 flex-col p-6"
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Naše Sekcije
      </h2>
      <div className="mt-16 flex flex-col flex-wrap content-center justify-center gap-20 md:flex-row">
        {sections}
      </div>
    </section>
  );
};

export default Sections;
