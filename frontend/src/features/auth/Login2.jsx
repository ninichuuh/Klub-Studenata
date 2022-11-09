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
    <section className="h-3/4">
      <header>
        <h1>Employee Login</h1>
      </header>
      <main className="">
        <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p>
        <div>
          <form className="bg-white grid place-items-center items-[rgba(58,51,78,1)] m-0" onSubmit={handleSubmit}>
            <input
              spellcheck="false"
              className="rounded-lg bg-[rgba(237,234,247,1)] items-[rgba(90, 79, 121, 1)] border-0 h-12 text-base py-0 px-4 w-full"
              id="username"
              type="text"
              placeholder="Username"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
            <div className="password">
              <input
                spellcheck="false"
                className="control"
                id="password"
                type="password"
                onChange={handlePwdInput}
                value={password}
                placeholder="Password"
                required
              />
              <button
                className="toggle"
                type="button"
                onclick="togglePassword(this)"
              ></button>
            </div>
            <label htmlFor="persist" className="">
            <input
              type="checkbox"
              className=""
              id="persist"
              onChange={handleToggle}
              checked={persist}
            />
            Trust This Device
          </label>
            <button className="control">LOGIN</button>
          </form>
        </div>
      </main>
      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </section>
  );

  return content;
};
export default Login2;
