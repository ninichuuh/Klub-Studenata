import React, { useState, useEffect, useRef, useCallback } from "react";
import Dropzone from "./DropZone";
const Form = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, message]);
  const onDrop = useCallback((acceptedFiles) => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };
  const handleUserInput = (e) => setEmail(e.target.value);
  const handleMsgInput = (e) => setMessage(e.target.value);
  const errClass = errMsg ? "errmsg" : "offscreen";
  return (
    <div className="spacer" id="forma">
      <h1>Dodajte sliku</h1>
      <p>
        Podijelite i vi prošlog istarskog bnkalslkdhabdjbsdbjkačbfnba
        <br />
        odsabfjkbasjkfbčajfbakjfbabfjkfb
      </p>
      <p ref={errRef} className={errClass} aria-live="assertive">
        {errMsg}
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className="form__input"
          type="email"
          id="email"
          ref={userRef}
          value={email}
          onChange={handleUserInput}
          autoComplete="off"
          placeholder="Vaša elektronička pošta"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          className="form__input"
          type="text"
          rows="6"
          id="message"
          onChange={handleMsgInput}
          value={message}
          placeholder="Vaš opis slika"
          required
        />
        <Dropzone onDrop={onDrop} accept={"image/*"} />
        <button className="form__submit-button">Pošalji Slike</button>
      </form>
      <footer>
        <address className="public__addr">
          Klub Studenata Istre Mate Balota 13 Ilica Zagreb, RH 10000, <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
          <br />
          <a href="email: ksimb@gmail.com">..ksimb@gmail</a>
        </address>
      </footer>
    </div>
  );
};

export default Form;
