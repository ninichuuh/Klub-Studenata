import { useState } from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSend) {
      sendFiles();
    }
  };

  const [email, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState();
  const onEmailChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onFileChanged = (e) => setFile(e.target.value);
  const canSend = [email, text, file].every(Boolean);
  const sendFiles = async (e) => {
    const formData = new FormData();
    const response = await fetch("http://localhost:3500/upload", {
      method: "POST",
      body: formData
    });

    const json = await response.json();
  };
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height my-12 scroll-mt-16 justify-center p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Javi Nam Se
      </h2>
      <form
        onSubmit={handleSubmit}
        id="uploadForm"
        className="flex flex-initial flex-col items-center justify-center gap-8 text-2xl sm:text-3xl"
      >
        <label className="w-1/2 font-medium sm:w-1/3">
          Tvoj email
          <input
            type="email"
            id="email"
            name="email"
            required
            minLength="3"
            cols="30"
            placeholder="hiti.balotu@glova.bs"
            onChange={onEmailChanged}
            className="mt-2 w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black  hover:shadow-custom focus:outline-none dark:border-none sm:text-3xl"
          />
        </label>

        <label className="w-1/2 font-medium sm:w-1/3">
          Porukica
          <textarea
            name="message"
            id="message"
            rows="7.5"
            placeholder="Reci non co lepo i pošalji ko slikico"
            required
            onChange={onTextChanged}
            className="mt-2 w-full rounded-xl border border-solid border-slate-900 bg-gray-50 p-3 text-2xl text-black  hover:shadow-custom focus:outline-none dark:border-none sm:text-3xl"
          ></textarea>
        </label>
        <label
          htmlFor="myFiles"
          className="mb-2 flex w-1/2 flex-col font-medium text-black dark:text-white sm:w-1/3"
        >
          Vaše slike
          <input
            type="file"
            id="myFiles"
            accept="image/*"
            title=" "
            multiple
            className="mt-2 w-full cursor-pointer rounded-xl border border-slate-900 bg-gray-50 text-center text-white file:mr-5 file:rounded-xl file:border-0 file:bg-green-900 file:py-2 file:font-medium file:text-white hover:shadow-custom hover:file:bg-green-700 focus:outline-none active:file:bg-green-500 dark:border-none dark:text-black"
            onChange={onFileChanged}
          />
        </label>

        <button className="h-20 w-48 self-center rounded-xl border border-solid border-slate-900 bg-green-900 p-3 font-semibold capitalize text-white hover:bg-green-700 hover:shadow-custom active:bg-green-500 dark:border-none">
          {" "}
          Ala Šu!
        </button>
      </form>
    </section>
  );
};

export default Form;
