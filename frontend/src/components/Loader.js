import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <svg width="200px" height="200px" viewBox="-4 -1 38 28">
        <polygon
          fill="transparent"
          stroke="#FFFF"
          stroke-width="2"
          points="15,30 30,0 0,0"
        ></polygon>
      </svg>
    </div>
  );
};

export default Loader;
