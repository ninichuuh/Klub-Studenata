import React, { useState } from "react";
import { ReactComponent as ScrollToTop } from "../../img/angle-up-solid.svg";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button className="fixed right-10 bottom-10 z-10 h-20 w-20 cursor-pointer ">
      <ScrollToTop
        onClick={scrollToTop}
        fill="#049B3B"
        style={{ display: visible ? "inline" : "none" }}
      />
    </button>
  );
};

export default ScrollButton;
