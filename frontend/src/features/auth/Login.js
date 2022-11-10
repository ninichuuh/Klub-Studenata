import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const Login2 = () => {
  useTitle("Employee Login");

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

  if (isLoading) return <PulseLoader color={"#FFF"} />;

  const content = (
    <>
      <header>
        <h1>Članska Prijava</h1>
      </header>
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black py-6 sm:py-12">
        <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p>
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="absolute inset-0 -rotate-6 -skew-y-0 transform rounded-3xl bg-gradient-to-r from-green-600 to-green-900 shadow-lg sm:skew-y-0 sm:rounded-3xl"></div>
          <div className="relative rounded-3xl bg-white px-4 py-10 shadow-lg sm:p-20">
            <form className="" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  spellCheck="false"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-green-600 focus:outline-none"
                  id="username"
                  type="text"
                  placeholder="Korisničko ime"
                  ref={userRef}
                  value={username}
                  onChange={handleUserInput}
                  autoComplete="off"
                  required
                />
                <label
                  htmlFor="username"
                  className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Korisničko ime
                </label>
              </div>
              <div className="relative my-10">
                <input
                  spellCheck="false"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-green-600 focus:outline-none"
                  id="password"
                  type="password"
                  onChange={handlePwdInput}
                  value={password}
                  placeholder="Lozinka"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Lozinka
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  id="persist"
                  type="checkbox"
                  onChange={handleToggle}
                  checked={persist}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-green-600"
                />
                <label
                  htmlFor="persist"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Zapamti me
                </label>
              </div>
              <div className="relative">
                <button className="h-10 w-32 rounded-xl border border-solid border-slate-900 bg-gradient-to-r from-green-600 to-green-900 text-2xl text-white hover:bg-green-700 hover:shadow-custom active:bg-green-500 dark:border-none">
                  Prijava
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <Link to="/">Back to Home</Link>
        </footer>
      </section>
    </>
  );

  return content;
};
export default Login2;
