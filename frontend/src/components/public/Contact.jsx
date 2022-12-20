import Button from "../UI/Button";
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height flex scroll-mt-20 flex-row justify-center gap-12 p-6"
    >
      <div>
        <h2 className="mb-12 text-center text-base font-bold underline decoration-yellow-300 decoration-solid decoration-[14px] underline-offset-[14px] sm:text-5xl">
          Kontaktiraj nas
        </h2>
        <form className="flex flex-col w-[580px] h-[650px] gap-8" onSubmit={handleSubmit}>
          <label htmlFor="email" >E-pošta
          <input type="email" id="email" placeholder="mate.balota@ksimb.hr" className="border-red rounded-lg border-[6px] w-full h-12" /></label>
          <input type="text" id="naslov" placeholder="naslov" className="border-red rounded-lg border-[6px] w-full h-12" />
          <input
          className="border-red rounded-lg border-[6px] w-full h-48"
            type="texarea"
            id="poruke"
            placeholder="poruka"
            rows="6"
            cols="30"
          />
          <Button text="Učitaj slike" />
          <hr />
          <div><label className="text-xs accent-zelena" htmlFor="policy">
          <input id="policy"  type="checkbox"/>Pročitao/la sam pravila privatnosti i slažem se s uvjetima.</label>
          <Button text="Pošalji &#10132;" /></div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
