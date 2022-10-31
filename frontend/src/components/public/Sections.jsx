import React from "react";
import Football from "../../img/Football.png";
import Creative from "../../img/Creative.png";
import Goats from "../../img/Goats.png";
const Sections = () => {
  return (
    <section
      id="sections"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Naše Sekcije
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src={Football} alt="Nogomet" className="mb-6 w-1/2" />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Futsal sekcija
          </h3>

          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 ">
          <button className="w-48 rounded-xl border border-solid border-slate-900 bg-indigo-700 p-3 text-white hover:bg-indigo-300 active:bg-indigo-500 dark:border-none">   Gol!
            </button>
          </p>
        </li>
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src={Creative} alt="Creative" className="mb-6 w-1/2" />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Kreativna sekcija
          </h3>

          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 ">
          <button className="w-48 rounded-xl border border-solid border-slate-900 bg-indigo-700 p-3 text-white hover:bg-indigo-300 active:bg-indigo-500 dark:border-none">  Bol!
            </button>
          </p>
        </li>{" "}
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src={Goats} alt="PiPi" className="mb-6 w-1/2" />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Po&#8508; sekcija
          </h3>

          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 ">
          <button className="w-48 rounded-xl border border-solid border-slate-900 bg-indigo-700 p-3 text-white hover:bg-indigo-300 active:bg-indigo-500 dark:border-none">
            Po&#8508; !
            </button>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Sections;
