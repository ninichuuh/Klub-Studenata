import React from "react";

const Event = ({ name, text, date }) => {
  return (
    <div className="flex h-32 w-[560px] flex-row gap-5 rounded-lg shadow-event">
      <div className="flex flex-col">
        <button className="h-8 w-20">{date}</button>
        <button className="h-8 w-20">Galerija</button>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-base font-normal">{text}</p>
      </div>
    </div>
  );
};

export default Event;
