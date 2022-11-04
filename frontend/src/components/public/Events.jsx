import React from "react";
import Calendar from "../UI/Calendar";
import Event from "../UI/Event";
const Events = () => {
  return (
    <section
      id="events"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height mb-12 flex scroll-mt-40 flex-col items-center justify-center gap-8 bg-red-900 p-6"
    >
      <div className="">
        {" "}
        <Calendar />
      </div>
      <div className="">
        <Event />
        <Event />
        <Event />
      </div>
    </section>
  );
};

export default Events;
