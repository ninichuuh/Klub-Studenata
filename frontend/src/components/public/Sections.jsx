import React from "react";
import SectionCard from "./UI/SectionCard";
import { Football, Goats, Creative } from "../../img/images";
const sectionsData = [
  {
    id: 1,
    sectionName: "Sportska sekcija",
    imgSrc: Football,
    imgAlt: "Sportska sekcija",
    text: "OIAhfouahgfnasfhaisuhfoiagiasngbaoahsoijaoiaghnfghaufngafhgoaingoisjgdgnuoujis sdogiisdnšgahnfdk gfjdigjfdjošjg jgofidšagj fdiagjadfjgđda gijfgjpsjejmgi jfsijgejfidjsidejf isjfsđdijfiđesjfsd.",
  },
  {
    id: 2,
    sectionName: "Kreativna sekcija",
    imgSrc: Creative,
    imgAlt: "Kreativna sekcija",
    text: "OIAhfouahgfnasfhaisuhfoiagiasngbaoahsoijaoiaghnfghaufngafhgoaingoisjgdgnuoujis sdogiisdnšgahnfdk gfjdigjfdjošjg jgofidšagj fdiagjadfjgđda gijfgjpsjejmgi jfsijgejfidjsidejf isjfsđdijfiđesjfsd.",
  },
  {
    id: 3,
    sectionName: "Popit sekcija",
    imgSrc: Goats,
    imgAlt: "Popit sekcija",
    text: "OIAhfouahgfnasfhaisuhfoiagiasngbaoahsoijaoiaghnfghaufngafhgoaingoisjgdgnuoujis sdogiisdnšgahnfdk gfjdigjfdjošjg jgofidšagj fdiagjadfjgđda gijfgjpsjejmgi jfsijgejfidjsidejf isjfsđdijfiđesjfsd.",
  },
  {
    id: 4,
    sectionName: "Popit sekcija",
    imgSrc: Goats,
    imgAlt: "Popit sekcija",
    text: "OIAhfouahgfnasfhaisuhfoiagiasngbaoahsoijaoiaghnfghaufngafhgoaingoisjgdgnuoujis sdogiisdnšgahnfdk gfjdigjfdjošjg jgofidšagj fdiagjadfjgđda gijfgjpsjejmgi jfsijgejfidjsidejf isjfsđdijfiđesjfsd.",
  },
  {
    id: 5,
    sectionName: "Popit sekcija",
    imgSrc: Goats,
    imgAlt: "Popit sekcija",
    text: "OIAhfouahgfnasfhaisuhfoiagiasngbaoahsoijaoiaghnfghaufngafhgoaingoisjgdgnuoujis sdogiisdnšgahnfdk gfjdigjfdjošjg jgofidšagj fdiagjadfjgđda gijfgjpsjejmgi jfsijgejfidjsidejf isjfsđdijfiđesjfsd.",
  },
];

const sections = sectionsData.map((section) => (
  <SectionCard
    key={section.id}
    img={section.imgSrc}
    alt={section.imgAlt}
    text={section.text}
    name={section.sectionName}
  />
));

const Sections = () => {
  return (
    <section
      id="sections"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height my-12 flex scroll-mt-20 flex-col p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Naše Sekcije
      </h2>
      <div className="mt-16 flex flex-col flex-wrap content-center justify-center gap-20 md:flex-row">
        {sections}
      </div>
    </section>
  );
};

export default Sections;
