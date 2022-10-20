import Tunnel from "../../img/tunnel.png";
const Head = () => {
  return (
    <section
      id="hero"
      className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          Klub studenata Istre &nbsp;
          <span className="text-indigo-700 dark:text-indigo-300">
            Mate Balota
          </span>
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          je udruga s ciljem okupljanja studenata radi prenošenja tradicije
          solidarnosti i promoviranja istarske kulture.
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          1963-2023
        </p>
      </article>
      <img className="w-1/2" src={Tunnel} alt="Rocket Dab" />
    </section>
  );
};

export default Head;
