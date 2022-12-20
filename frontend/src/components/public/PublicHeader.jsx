import React, { useState } from "react";
// import { useLayoutEffect } from "react";
// import { useRef } from "react";
import { LogoVec, Login } from "../../img/images";
// import { headerIntro } from "./Animate";
const PublicHeader = () => {
  // let introNav = useRef();

  // useLayoutEffect(() => {
  //   headerIntro(introNav);
  // }, []);

  const [isOpen, setToggleMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMenu(!isOpen);
    console.log(isOpen);
  };

  return (
    <header
      // ref={(el) => (introNav = el)}
      className="top-0 z-10 overflow-hidden overflow-x-hidden "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-l font-medium">
          <div className="flex gap-8">
            <img src={LogoVec} alt="Logo" />
            <p className="text-color-black">
              Klub Studenata Istre
              <br />
              Mate Balota
            </p>{" "}
          </div>{" "}
        </h1>
        <div className="">
          <button
            id="hamburger-button"
            className={
              isOpen
                ? "relative h-8 w-8 cursor-pointer bg-black text-3xl md:hidden"
                : "relative h-8 w-8 cursor-pointer bg-zelena text-3xl md:hidden"
            }
            onClick={toggleMenu}
            aria-label="mobile menu"
          />
          <nav
            className="text-l hidden flex-nowrap space-x-6 md:block"
            aria-label="main"
          >
            <a href="#hero" className="hover:opacity-50">
              Naslovna
            </a>
            <a href="#about" className="hover:opacity-50">
              O Nama
            </a>
            <a href="#sections" className="hover:opacity-50">
              Naše Sekcije
            </a>
            <a href="#events" className="hover:opacity-50">
              Događanja
            </a>
            <a href="#contact" className="hover:opacity-50">
              Kontakt
            </a>
            <a href="/login" className="inline-block hover:opacity-50">
              <img src={Login} alt="Login icon" />
            </a>
          </nav>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={
          isOpen
            ? "top-68 justify-content-center absolute flex w-full origin-top animate-open-menu flex-col bg-black text-5xl"
            : "top-68 justify-content-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl"
        }
        onClick={toggleMenu}
      >
        <nav
          className="flex min-h-screen flex-col items-center bg-zelena py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a href="#about" className="w-full py-6 text-center hover:opacity-90">
            O nama
          </a>
          <a
            href="#sections"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Naše Sekcije
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Kontaktiraj nas
          </a>
          <a
            href="#events"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Događanja
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
