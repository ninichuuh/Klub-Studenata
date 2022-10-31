const Form = () => {
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height my-12 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Javi Nam Se
      </h2>
      <form
        action=""
        className="items-left  flex max-w-4xl flex-col items-center gap-4 text-2xl sm:text-3xl"
      >
        <label className="w-3/4 sm:w-3/4">
          Tvoj email:
          <input
            type="email"
            id="email"
            name="email"
            required
            minLength="3"
            
            cols="30"
            placeholder="hiti.balotu@glova.bs"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
          />
        </label>
        <label className="w-3/4 sm:w-3/4">
          Porukica:
          <textarea
            name="message"
            id="message"
            rows="7.5"
            placeholder="Reci non co lepo i pošalji ko slikico"
            required
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
          ></textarea>
        </label>
        <button className="w-48 rounded-xl border border-solid border-slate-900 bg-indigo-700 p-3 text-white hover:bg-indigo-300 active:bg-indigo-500 dark:border-none">  Ala Šu!
        </button>
      </form>
    </section>
  );
};

export default Form;
