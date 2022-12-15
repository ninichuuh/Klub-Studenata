import React from "react";

const Loader = () => {
  return (
    <div className="grid h-screen place-items-center">
      <svg className="h-[300px] w-[300px]">
        <path
          d="M-15,-15 L15,15"
          className="path"
          transform="translate(75 100)"
          fill="none"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M15,-15l-30,30"
          className="path"
          transform=" translate(75 130)"
          fill="none"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M-65,-45L65,45"
          className="path"
          transform=" translate(125 190)"
          fill="none"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M-0,50L0,-120"
          className="path"
          transform="translate(190,185)"
          fill="none"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M-25,-15L25,15"
          className="path"
          transform="translate(215 80)"
          fill="none"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
      </svg>
    </div>
  );
};

export default Loader;
