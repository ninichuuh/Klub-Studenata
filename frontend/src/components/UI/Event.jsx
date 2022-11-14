import React from "react";

const Event = () => {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-2 border-2 border-b-0 border-black">Date</div>
      <div className="col-span-3 border-2 border-x-0 border-black">Picture</div>
      <div className="col-span-7 border-2 border-black">
        Info o jebenim projektima
      </div>
    </div>
  );
};

export default Event;
