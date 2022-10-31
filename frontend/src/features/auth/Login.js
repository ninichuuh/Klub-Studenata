import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

import usePersist from "../../hooks/usePersist";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/dash");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return <p>Loading...</p>;

  const content = (
    <section
      id="public"
      className="widescreen:section-min-height tallscreen:section-min-height section-min-height flex grow flex-col flex-nowrap gap-4"
    >
      <header>
        <h1>Članska Prijava</h1>
      </header>
      <main className="border-y-2">
        <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p>

        <form
          className="items-left flex max-w-4xl flex-col items-center gap-4 text-2xl sm:text-3xl"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Korisničko ime:</label>
          <input
            className="w-full rounded-xl border border-solid border-red-900 p-3 text-2xl text-black dark:border-red-300 sm:text-3xl"
            type="text"
            placeholder="istrijan"
            id="username"
            ref={userRef}
            value={username}
            onChange={handleUserInput}
            autoComplete="off"
            cols="30"
            required
          />

          <label htmlFor="password">Password:</label>
          <label className="text-sm" htmlFor="password">Ima 3 broja u 8 znakova, ko Y</label>
          <input
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-red-300 sm:text-3xl"
            type="password"
            placeholder=""
            id="password"
            onChange={handlePwdInput}
            value={password}
            required
          />
          <button className="border-8">Prijavi se</button>

          <label htmlFor="persist" className="flex w-full items-center gap-2">
            <input
              type="checkbox"
              className="h-6 w-6"
              id="persist"
              onChange={handleToggle}
              checked={persist}
            />
            Trust This Device
          </label>
        </form>
      </main>
      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </section>
  );

  return content;
};
export default Login;
