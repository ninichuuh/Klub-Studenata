import Button from "../UI/Button";
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height flex scroll-mt-20 flex-row place-content-evenly items-center gap-12 p-6"
    >
      <div>
        {" "}
        <h2 className="mb-12 text-center text-base font-bold  underline decoration-yellow-300 decoration-solid decoration-[14px] underline-offset-[14px] sm:text-5xl">
          Kontaktiraj nas
        </h2>
        <form className="flex flex-col  " onSubmit={handleSubmit}>
          <input type="email" id="email" placeholder="email" />
          <input type="text" id="naslov" placeholder="naslov" />
          <input
            type="texarea"
            id="poruke"
            placeholder="poruka"
            rows="6"
            cols="30"
          />
          <Button text="Učitaj slike" />
          <hr />
          <input type="checkbox" placeholder="Ovim putem" />
          <Button text="Pošalji &#10132;" />
        </form>
      </div>
    </section>
  );
};
export default Contact;
