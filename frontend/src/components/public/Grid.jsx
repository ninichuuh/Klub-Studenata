import React from "react";

import { img1, img2, img3, img4, img5 } from "../../img/images";

const Grid = () => {
  return (
    <section
      id="grid"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height  scroll-mt-40 container px-4 flex flex-col items-center my-16"
    >
      <h2 className="mb-4">S Matetom Kroz 60 Leta</h2>
      <p className="mb-8 font-bold">1963.-2023.</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="col-span-2 md:col-span-3 md:row-span-2">
          <img
            src={img1}
            alt="borabora1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="borabora2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="maldives1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img4}
            alt="maldives2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img5}
            alt="maldives1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Grid;
