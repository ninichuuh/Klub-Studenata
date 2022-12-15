import React from "react";
import EventSwiper from "../UI/EventSwiper"
const Events = () => {
  return (
    <section
      id="events"
      className="widescreen:section-min-height  tallscreen:section-min-height section-min-height my-12 flex scroll-mt-20 flex-col p-6"
    >
      <h2 className="mb-12 text-center text-base font-bold  underline decoration-yellow-300 decoration-solid decoration-[14px] underline-offset-[14px] sm:text-5xl">
        Štorije iz Kluba</h2>
      <div className="flex flex-row mt-16">
  <div className="w-1/2">bla bla</div>
      <div className="w-1/2">
        <EventSwiper/>
      </div></div>
    </section>
  );
};

export default Events;
