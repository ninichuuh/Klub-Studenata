import React from "react";

const Event = ({name,text,date}) => {
  return (
    <div className="h-32 w-96 gap-5 flex rounded-lg flex-row shadow-event">
      <div className="flex flex-col">
        <button className="w-20 h-8">{date}</button>
        <button className="w-20 h-8">Galerija</button>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-base font-normal">{text}</p>
      </div>
    </div>
  );
};

export default Event;
